import React, { createContext, useContext, useEffect, useState } from "react";
import { Theme, themes } from "../lib/theme";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.light);

  const setTheme = (themeName: string) => {
    const theme = themes[themeName];
    if (theme) {
      setCurrentTheme(theme);
      document.documentElement.setAttribute("data-theme", themeName);
      // Apply CSS variables
      Object.entries(theme.colors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--color-${key}`, value);
      });
      Object.entries(theme.spacing).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--spacing-${key}`, value);
      });
      Object.entries(theme.borderRadius).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--radius-${key}`, value);
      });
      Object.entries(theme.shadows).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--shadow-${key}`, value);
      });
    }
  };

  useEffect(() => {
    // Initialize theme
    setTheme("light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
