import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { Theme, ThemeContext } from "../contexts/ThemeContext";

interface IThemeProvider {
  children: ReactNode;
}

const STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch (error) {
    // Storage can be unavailable (private mode, blocked cookies).
  }

  return window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function ThemeProvider({
  children,
}: IThemeProvider): ReactElement {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      // Ignore storage errors, the theme still applies for this session.
    }

    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-color-mode", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
