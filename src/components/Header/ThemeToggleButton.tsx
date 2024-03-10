import React, { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const THEMES = ["light", "dark"] as const;

const getTheme = () => localStorage.getItem("theme") as (typeof THEMES)[number];

export function ThemeToggleButton() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<(typeof THEMES)[number]>(() => {
    if (import.meta.env.SSR) {
      return "light";
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return getTheme();
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      return root.classList.add("dark");
    }
    root.classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <button type="button" onClick={toggleTheme} className="flex p-0 bg-zinc-700 rounded-full transition-colors dark:bg-orange-700">
      {!isMounted &&
        THEMES.map((t) => (
          <span className="p-2 rounded-full transition-colors" key={t}>
            <IsDark theme={t} />
            <IsLight theme={t} />{" "}
          </span>
        ))}
      {isMounted &&
        THEMES.map((t) => {
          const checked = t === theme;
          return (
            <span
              key={t}
              arial-label="Toggle theme"
              className={`p-2 rounded-full transition-colors ${checked ? "bg-orange-600 dark:bg-gray-700 border border-orange-600 dark:border-orange-300" : ""}`}
            >
              <IsDark theme={t} />
              <IsLight theme={t} />
            </span>
          );
        })}
    </button>
  );
}

const IsDark = ({ theme }: { theme: (typeof THEMES)[number] }) =>
  theme === "dark" && (
    <IoMoon className="transition-colors text-[1rem] text-zinc-100 dark:text-zinc-50" />
  );
const IsLight = ({ theme }: { theme: (typeof THEMES)[number] }) =>
  theme === "light" && (
    <IoSunny className="transition-colors text-[1rem] text-zinc-900 dark:text-zinc-50" />
  );
