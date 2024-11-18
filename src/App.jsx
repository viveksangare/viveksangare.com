import { useEffect, useState } from "react";
import "./styles/App.css";
import { ThemeProvider, useColorScheme, useMediaQuery } from "@mui/material";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {lightTheme,darkTheme} from "./theme.js";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState("light");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);


  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <Header mode={mode} setMode={setMode} />
      <div style={{ flexGrow: 1 }}></div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
