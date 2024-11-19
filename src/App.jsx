import { useEffect, useState } from "react";
import "./styles/App.css";
import { Box, Container, ThemeProvider, useMediaQuery } from "@mui/material";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { lightTheme, darkTheme } from "./theme.js";
import Home from "./Components/Home.jsx";
import { useThemeContext } from "./Contexts/ThemeContext.jsx";
import { useTheme } from "@emotion/react";

function App() {
  const { mode, toggleTheme } = useThemeContext(); // Access current theme mode
  const theme = useTheme();

  return (
    <>
      <Header mode={mode} toggleTheme={toggleTheme} />
      <Box
        component="section"
        sx={{
          flexGrow: 1,
          backgroundColor:
            mode === "dark"
              ? theme.palette.primary.dark
              : theme.palette.primary.light,
        }}
      >
        <Container
          sx={{
            // display: "flex",
            height:"100%"
          }}
        >
          <Home />
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default App;
