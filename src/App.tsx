import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </>
  );
}

export default App;
