import { useEffect, useState } from "react";
import "./styles/App.css";
import { Box, Container, ThemeProvider, useMediaQuery } from "@mui/material";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home.jsx";
import { useThemeContext } from "./Contexts/ThemeContext.jsx";
import { useTheme } from "@emotion/react";

function App() {
  const { mode, toggleTheme } = useThemeContext(); // Access current theme mode

  return (
    <>
      <Header mode={mode} toggleTheme={toggleTheme} />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Home />
      </Box>
      <Footer />
    </>
  );
}

export default App;
