import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import PhysicsCanvas from "./PhysicsCanvas";
import { useTheme } from "@emotion/react";
import cuteProgrammer from "../assets/Programmer-cuate.svg";
import "../styles/Home.css";

function Hero() {
  function TypewriterEffect({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pause = 1000,
  }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentText = texts[currentTextIndex];

      if (!isDeleting) {
        // Typing phase
        if (displayedText.length < currentText.length) {
          const typeTimeout = setTimeout(() => {
            setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
          }, typingSpeed);
          return () => clearTimeout(typeTimeout);
        } else {
          // Pause before deleting
          const pauseTimeout = setTimeout(() => {
            setIsDeleting(true);
          }, pause);
          return () => clearTimeout(pauseTimeout);
        }
      } else {
        // Deleting phase
        if (displayedText.length > 0) {
          const deleteTimeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
          return () => clearTimeout(deleteTimeout);
        } else {
          // Move to the next text after deleting
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, [
      texts,
      typingSpeed,
      deletingSpeed,
      pause,
      displayedText,
      isDeleting,
      currentTextIndex,
    ]);

    return <span>{displayedText}</span>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        flexGrow: 1,
        zIndex: 2,
        pointerEvents: "none",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
      }}
    >
      <Box sx={{ width: { xs: "100%", sm: "50%", color: "#2B7A78" } }}>
        <Typography variant="h5" fontWeight="500">
          Hi There!
          <Typography variant="span" className="wave" marginLeft="10px">
            👋
          </Typography>
        </Typography>
        <Typography variant="h3">
          I&apos;m{" "}
          <Typography variant="span" fontWeight="500">
            VIVEK SANGARE
          </Typography>
        </Typography>
        <Box
          sx={{
            fontFamily: "monospace",
            fontSize: "24px",
            color: "#4c956c",
          }}
        >
          <TypewriterEffect
            texts={[
              "Front-end Developer",
              "MERN Stack Developer",
              "Software Developer",
              "Freelancer",
            ]}
            typingSpeed={100}
            deletingSpeed={50}
            pause={1500}
          />
          <Typography variant="span" className="cursor"></Typography>
        </Box>
      </Box>

      <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
        <Box>
          <Box
            component="img"
            src={cuteProgrammer}
            alt="Sample Image"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor:
            theme.mode === "dark"
              ? theme.palette.primary.dark
              : theme.palette.primary.light,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: window.innerHeight,
          zIndex: 1,
        }}
      >
        <PhysicsCanvas />
      </Box>
      <Hero />
    </>
  );
}