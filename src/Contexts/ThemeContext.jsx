import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { lightTheme, darkTheme } from "../theme.js";
import CodeLoader from "../Components/CodeLoader.jsx";

const ThemeContext = createContext();

// ThemeProvider component that provides the theme and toggle function
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [themeResolved, setThemeResolved] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");

    const timer = setTimeout(() => {
      setThemeResolved(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  if (!themeResolved) {
    return <CodeLoader />;
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MUIThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useThemeContext = () => useContext(ThemeContext);
