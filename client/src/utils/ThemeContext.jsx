import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

// Available color themes
export const COLOR_THEMES = {
  DEFAULT: "default", // Blue theme
  DARK_BLUE: "dark-blue",
  PURPLE: "purple",
  GREEN: "green",
  ORANGE: "orange",
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return savedDarkMode ? savedDarkMode === "true" : prefersDark;
  });

  // Color theme state
  const [colorTheme, setColorTheme] = useState(() => {
    const savedColorTheme = localStorage.getItem("colorTheme");
    return savedColorTheme || COLOR_THEMES.DEFAULT;
  });

  useEffect(() => {
    // Handle dark mode
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);

    // Handle color theme
    // Remove all theme classes first
    Object.values(COLOR_THEMES).forEach((theme) => {
      document.documentElement.classList.remove(`theme-${theme}`);
    });

    // Add the current theme class
    document.documentElement.classList.add(`theme-${colorTheme}`);
    localStorage.setItem("colorTheme", colorTheme);
  }, [darkMode, colorTheme]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeColorTheme = (theme) => {
    if (Object.values(COLOR_THEMES).includes(theme)) {
      setColorTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        colorTheme,
        changeColorTheme,
        availableThemes: COLOR_THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
