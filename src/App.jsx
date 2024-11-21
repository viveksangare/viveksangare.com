import { useEffect, useState } from "react";
import "./styles/App.css";
import { Box, Container, ThemeProvider, useMediaQuery } from "@mui/material";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { lightTheme, darkTheme } from "./theme.js";
import Home from "./Components/Home.jsx";
import { useThemeContext } from "./Contexts/ThemeContext.jsx";
import { useTheme } from "@emotion/react";
import cuteProgrammer from "./assets/Programmer-cuate.svg";

function App() {
  const { mode, toggleTheme } = useThemeContext(); // Access current theme mode

  return (
    <>
      <Header mode={mode} toggleTheme={toggleTheme} />
      <Box
        component="section"
        sx={{
          flexGrow: 1,
        }}
      >
        <Container
          sx={{
            minHeight: "100%",
            // width: "100%",
          }}
        >
          {/* <Home /> */}
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default App;
