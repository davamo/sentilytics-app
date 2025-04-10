import { Paper, Typography, Chip } from '@mui/material';

type Props = {
  sentiment: string;
  confidence: number;
};

const colorMap: Record<string, 'success' | 'error' | 'default'> = {
  Positivo: 'success',
  Negativo: 'error',
  Neutral: 'default',
};

const ResultDisplay = ({ sentiment, confidence }: Props) => {
  return (
    <Paper elevation={2} className="p-6 mt-6 bg-gray-50">
      <Typography variant="h6" gutterBottom>
        Resultado del análisis
      </Typography>
      <Chip
        label={`Sentimiento: ${sentiment}`}
        color={colorMap[sentiment]}
        className="mb-4"
      />
      <Typography variant="body1">
        Confianza: <strong>{(confidence * 100).toFixed(1)}%</strong>
      </Typography>
    </Paper>
  );
};

export default ResultDisplay;
