import { FiSun, FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import {useTheme} from 'next-themes';
export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const {setTheme, resolvedTheme } = useTheme();

  useEffect(()=>setMounted(true), []);

  if(!mounted){
    return null
  }
if(resolvedTheme === 'dark' ){
  return   <FiSun onClick={()=>setTheme('light')} className="h-5 w-5 text-yellow-400" />
}

if(resolvedTheme === 'light' ){
  return   <FiMoon onClick={()=>setTheme('dark')} className="h-5 w-5 text-yellow-400" />
}

  // Sync <html> class whenever theme changes
  // useEffect(() => {
  //   const root = document.documentElement;
  //   root.classList.remove('light', 'dark');
  //   root.classList.add(theme);
  // }, [theme]);

  // return (
  //   <button
  //     onClick={() => {
  //       toggleTheme(); // This updates Zustand and triggers useEffect above
  //       localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light'); // ensure it's saved
  //     }}
  //     className="p-2 rounded-full transition duration-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
  //     aria-label="Toggle Theme"
  //   >
  //     {theme === 'light' ? (
  //       <Moon className="h-5 w-5 text-gray-800" />
  //     ) : (
  //       <Sun className="h-5 w-5 text-yellow-400" />
  //     )}
  //   </button>
  // );
};





////use store
// import { useThemeStore } from '@/store/useThemeStore';
// import { Sun, Moon } from 'lucide-react';
// import { useEffect } from 'react';

// export const ThemeToggle = () => {
//   const { theme, toggleTheme } = useThemeStore();

//   // Sync <html> class whenever theme changes
//   useEffect(() => {
//     const root = document.documentElement;
//     root.classList.remove('light', 'dark');
//     root.classList.add(theme);
//   }, [theme]);

//   return (
//     <button
//       onClick={() => {
//         toggleTheme(); // This updates Zustand and triggers useEffect above
//         localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light'); // ensure it's saved
//       }}
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