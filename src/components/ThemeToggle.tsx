import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

function ThemeToggle({ small = false }: { small?: boolean }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

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

  const size = small ? 18 : 24;

  return (
    <button
      onClick={toggleTheme}
      className={`${small ? "" : "p-4"} rounded-2xl bg-standard text-standard lg:link-hover`}
    >
      {isDark ? <FaMoon size={size} /> : <FaSun size={size} />}
    </button>
  );
}

export default ThemeToggle;
