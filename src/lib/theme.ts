export type Theme = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
};

export const themes: Record<string, Theme> = {
  light: {
    name: "light",
    colors: {
      primary: "#3b82f6",
      secondary: "#64748b",
      success: "#22c55e",
      warning: "#f59e0b",
      error: "#ef4444",
      background: "#ffffff",
      foreground: "#020617",
      muted: "#94a3b8",
      border: "#e2e8f0",
    },
    spacing: {
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    },
    borderRadius: {
      sm: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
    },
    shadows: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    },
  },
  dark: {
    name: "dark",
    colors: {
      primary: "#60a5fa",
      secondary: "#94a3b8",
      success: "#4ade80",
      warning: "#fbbf24",
      error: "#f87171",
      background: "#0f172a",
      foreground: "#f8fafc",
      muted: "#64748b",
      border: "#334155",
    },
    spacing: {
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    },
    borderRadius: {
      sm: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
    },
    shadows: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.3)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.4)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.4)",
    },
  },
};
