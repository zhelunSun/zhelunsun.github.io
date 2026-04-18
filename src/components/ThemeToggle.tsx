"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="theme-toggle p-2 rounded-md hover:bg-[var(--color-bg-secondary)] transition-colors text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="theme-toggle-sun" size={18} />
      <Moon className="theme-toggle-moon" size={18} />
    </button>
  );
}
