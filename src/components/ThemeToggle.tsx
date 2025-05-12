import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  if (resolvedTheme === "dark") {
    return (
      <FiSun
        onClick={() => setTheme("light")}
        className="h-5 w-5 text-yellow-400"
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        onClick={() => setTheme("dark")}
        className="h-5 w-5 text-yellow-400"
      />
    );
  }
};
