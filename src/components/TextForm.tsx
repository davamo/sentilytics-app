import { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';

type Props = {
  onAnalyze: (text: string) => void;
};

const TextForm = ({ onAnalyze }: Props) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAnalyze(text.trim());
    }
  };

  return (
    <Paper elevation={3} className="p-6 bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          label="Texto a analizar"
          multiline
          minRows={4}
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Analizar Sentimiento
        </Button>
      </form>
    </Paper>
  );
};

export default TextForm;
