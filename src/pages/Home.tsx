import TextForm from '../components/TextForm';
import ResultDisplay from '../components/ResultDisplay';
import Loading from '../components/Loading';
import { useState } from 'react';
import { analyzeText } from '../services/api';
import { saveToLocalHistory } from '../services/historyApi';

const Home = () => {
  const [result, setResult] = useState<{ sentiment: string; confidence: number } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (text: string) => {
    setLoading(true);
    const res = await analyzeText(text);
    setLoading(false);

    if (res?.data?.success && res.data.data) {
      const { sentiment, confidence } = res.data.data;

      const analysis = {
        text,
        sentiment,
        confidence,
        results: {
          summary: `Resultado: ${Math.round(confidence * 100)}% ${sentiment.toLowerCase()}.`,
        },
      };

      saveToLocalHistory(analysis);
      setResult({ sentiment, confidence });
    } else {
      console.error('Error: Invalid response structure', res);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <TextForm onAnalyze={handleAnalyze} />
      {loading && <Loading />}
      {result && (
        <ResultDisplay sentiment={result.sentiment} confidence={result.confidence} />
      )}
    </div>
  );
};

export default Home;
