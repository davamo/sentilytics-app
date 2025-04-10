import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-white px-3 py-1 rounded transition"
    >
      {dark ? '☀️ Claro' : '🌙 Oscuro'}
    </button>
  );
};

export default ThemeToggle;
