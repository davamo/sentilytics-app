import axios from 'axios';

const API_URL = 'http://localhost:5050/analyze';



export const analyzeText = async (text: string) => {

  try {
    const response = await axios.post(API_URL, { text });
    return response;
  } catch (error) {
    console.error('Error al analizar texto:', error);
    return null;
  }
};



