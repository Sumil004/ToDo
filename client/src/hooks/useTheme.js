import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);

    // Save to localStorage
    localStorage.setItem("theme", theme);

    // Add dark class to html element for Tailwind dark mode
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
