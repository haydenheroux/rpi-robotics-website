import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (stored === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(systemPrefersDark);
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
      return next;
    });
  };

  // TODO Use utility classes to define link behavior
  return (
    <button
      onClick={toggleTheme}
      className="p-4 rounded-2xl bg-standard text-standard"
    >
      {isDark ? <FaMoon size={24} /> : <FaSun size={24} />}
    </button>
  );
}

export default ThemeToggle;
