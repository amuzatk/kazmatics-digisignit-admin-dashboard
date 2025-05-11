// src/store/useThemeStore.ts
import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  hydrateTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  // toggleTheme: () =>
  //   set((state) => {
  //     const newTheme = state.theme === 'light' ? 'dark' : 'light';
  //     localStorage.setItem('theme', newTheme);
  //     document.documentElement.classList.toggle('dark', newTheme === 'dark');
  //     return { theme: newTheme };
  //   }),
  // setTheme: (theme) => {
  //   localStorage.setItem('theme', theme);
  //   document.documentElement.classList.toggle('dark', theme === 'dark');
  //   set({ theme });
  // },
  // hydrateTheme: () => {
  //   const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
  //   const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   const theme = stored ?? (systemPrefersDark ? 'dark' : 'light');
  //   document.documentElement.classList.toggle('dark', theme === 'dark');
  //   set({ theme });
  // },  


  // useThemeStore.ts
  hydrateTheme: () => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored ?? (systemPrefersDark ? 'dark' : 'light');
  
    // Apply the correct class to the <html> element
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  
    set({ theme });
  },
  
// hydrateTheme: () => {
//   const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
//   const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//   const theme = stored ?? (systemPrefersDark ? 'dark' : 'light');
//   set({ theme });
// },
setTheme: (theme) => {
  localStorage.setItem('theme', theme);
  set({ theme });
},
toggleTheme: () =>
  set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(state.theme);
    document.documentElement.classList.add(newTheme);
    return { theme: newTheme };
  }),
}));



