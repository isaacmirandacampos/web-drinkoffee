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
    <div className="flex bg-orange-100 rounded-full dark:bg-gray-800">
      {!isMounted &&
        THEMES.map((t) => (
          <Toggle>
            <IsDark theme={t} />
            <IsLight theme={t} />{" "}
          </Toggle>
        ))}
      {isMounted &&
        THEMES.map((t) => {
          const checked = t === theme;
          return (
            <Toggle
              key={t}
              onClick={toggleTheme}
              arial-label="Toggle theme"
              className={`p-2 rounded-full transition-colors cursor-pointer ${checked ? "bg-orange-400 dark:bg-gray-400" : ""}`}
            >
              <IsDark theme={t} />
              <IsLight theme={t} />
            </Toggle>
          );
        })}
    </div>
  );
}

const Toggle = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    {...props}
    className={`p-2 rounded-full transition-colors cursor-pointer ${props.className && props.className}`}
  >
    {props.children}
  </button>
);

const IsDark = ({ theme }: { theme: (typeof THEMES)[number] }) =>
  theme === "dark" && (
    <IoMoon className="text-[1rem] transition-colors text-zinc-900 dark:text-zinc-50" />
  );
const IsLight = ({ theme }: { theme: (typeof THEMES)[number] }) =>
  theme === "light" && (
    <IoSunny className="text-[1rem] transition-colors text-zinc-900 dark:text-zinc-50" />
  );
