import React, { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
};

const ToggleTheme: React.FC = () => {
  const [theme, setTheme] = useState<string>(getInitialTheme());

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button aria-label="ダークモード" onClick={handleToggle}>
      {theme === "dark" ? "☀" : "🌙"}
    </button>
  );
};

export default ToggleTheme;
