"use client";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle} className="text-sm px-2 py-1 border rounded">
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
