// components/Header.tsx
import { ThemeToggle } from './ThemeToggle';

export const Header = () => (
  <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
    <h1 className="text-xl font-semibold">Admin Dashboard</h1>
    <ThemeToggle />
  </header>
);