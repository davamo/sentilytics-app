import React, { useEffect, useState } from 'react';
import { getLocalHistory, clearLocalHistory } from '../services/historyApi';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);

const HistoryPage = () => {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    getLocalHistory().then(setHistory);
  }, []);

  const handleClear = () => {
    clearLocalHistory();
    setHistory([]);
  };

  const labels = history.map((_, i) => `#${i + 1}`);

  const getConfidenceValue = (item: any, type: string) => {
    return item.sentiment === type ? item.confidence * 100 : 0;
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Positivo',
        data: history.map((item) => getConfidenceValue(item, 'Positivo')),
        backgroundColor: 'green',
      },
      {
        label: 'Neutral',
        data: history.map((item) => getConfidenceValue(item, 'Neutral')),
        backgroundColor: 'gray',
      },
      {
        label: 'Negativo',
        data: history.map((item) => getConfidenceValue(item, 'Negativo')),
        backgroundColor: 'red',
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Historial de Análisis</h2>

      {history.length === 0 ? (
        <p className="text-gray-600">No hay análisis guardados.</p>
      ) : (
        <>
          <Bar data={chartData} className="mb-8" />

          <div className="overflow-x-auto bg-white shadow rounded-xl p-4">
            <table className="table-auto w-full text-sm text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-2 font-bold">Fecha</th>
                  <th className="p-2 font-bold">Texto</th>
                  <th className="p-2 font-bold text-green-600">😊 Positivo</th>
                  <th className="p-2 font-bold text-yellow-600">😐 Neutral</th>
                  <th className="p-2 font-bold text-red-600">☹️ Negativo</th>
                  <th className="p-2 font-bold">Resumen</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-2">{new Date(item.date).toLocaleString()}</td>
                    <td className="p-2 max-w-xs truncate">{item.text}</td>
                    <td className="p-2 text-green-600">
                      {item.sentiment === 'Positivo' ? Math.round(item.confidence * 100) : 0}%
                    </td>
                    <td className="p-2 text-yellow-600">
                      {item.sentiment === 'Neutral' ? Math.round(item.confidence * 100) : 0}%
                    </td>
                    <td className="p-2 text-red-600">
                      {item.sentiment === 'Negativo' ? Math.round(item.confidence * 100) : 0}%
                    </td>
                    <td className="p-2 text-sm">{item.results?.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={handleClear}
            className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Borrar historial
          </button>
        </>
      )}
    </div>
  );
};

export default HistoryPage;
