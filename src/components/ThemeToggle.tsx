// components/ThemeToggle.tsx
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">
      Toggle {dark ? 'Light' : 'Dark'} Mode
    </button>
  );
};
