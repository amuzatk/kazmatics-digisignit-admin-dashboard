import { useThemeStore } from '@/store/useThemeStore';
import { Sun, Moon } from 'lucide-react';
import { useEffect } from 'react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  // Sync <html> class whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <button
      onClick={() => {
        toggleTheme(); // This updates Zustand and triggers useEffect above
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light'); // ensure it's saved
      }}
      className="p-2 rounded-full transition duration-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-800" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-400" />
      )}
    </button>
  );
};






// // components/ThemeToggle.tsx
// import { useThemeStore } from '@/store/useThemeStore';
// import { Sun, Moon } from 'lucide-react';

// export const ThemeToggle = () => {
//   const { theme, toggleTheme } = useThemeStore();

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-full transition duration-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
//       aria-label="Toggle Theme"
//     >
//       {theme === 'light' ? (
//         <Moon className="h-5 w-5 text-gray-800" />
//       ) : (
//         <Sun className="h-5 w-5 text-yellow-400" />
//       )}
//     </button>
//   );
// };