import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Button } from '@mui/material';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white">
      <h1 className="text-lg font-bold">📈 Sentilytics</h1>
      <div className="flex gap-4 items-center">
        <Link to="/">
          <Button
            variant={pathname === '/' ? 'contained' : 'outlined'}
            color="secondary"
            size="small"
          >
            Inicio
          </Button>
        </Link>
        <Link to="/history">
          <Button
            variant={pathname === '/history' ? 'contained' : 'outlined'}
            color="secondary"
            size="small"
          >
            Historial
          </Button>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;