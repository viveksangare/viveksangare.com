import { Box, Button, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
// import PhysicsCanvas from "./PhysicsCanvas";
import { useTheme } from "@emotion/react";
import "../styles/Home.css";
import RandomPhysicsCanvas from "./RandomPhysicsCanvas";
import ProgrammerSvg from "./ProgrammerSvg";

export const Hero = () => {
  const theme = useTheme();

  // typerwriter effect
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
        position: "relative",
        height: { xs: `calc(100vh - 56px)`, sm: `calc(100vh - 64px)` },
      }}
    >
      {/* physics canvas */}
      <Box
        sx={{
          position: "absolute",
          height: "100vh",
          width: "100%",
          top: { xs: "-56px", sm: "-64px" },
          left: 0,
          display: { xs: "none", sm: "block" },
        }}
      >
        <RandomPhysicsCanvas />
      </Box>

      {/* content container */}
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "50%",
            },
            height: { xs: "50%", sm: "100%" },
            color: "#2B7A78",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: theme.otherTypographies.monospace.fontFamily,
              fontSize: "0.7rem",
              color: "#4c956c",
            }}
          >
            {"<h1>"}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "clamp(0.8rem, 8vw, 2.5rem)",
                sm: "clamp(0.1rem, 4vw, 3rem)",
                fontWeight: 400,
              },
            }}
          >
            Hi There! <br />
            I&apos;m{" "}
            <Typography
              variant="span"
              fontWeight="600"
              color={theme.palette.text.primary}
            >
              Vivek&nbsp;Sangare
              <Typography
                component="span"
                sx={{
                  fontFamily: theme.otherTypographies.monospace.fontFamily,
                  fontSize: "0.7rem",
                  color: "#4c956c",
                  marginLeft: "10px",
                }}
              >
                {"</h1>"}
              </Typography>
            </Typography>
          </Typography>
          <Box
            sx={{
              fontFamily: theme.otherTypographies.monospace.fontFamily,
              fontSize: {
                xs: "clamp(0.8rem, 6.5vw, 2rem)",
                sm: "clamp(0.1rem, 2.9vw, 2.5rem)",
              },
              color: theme.palette.primary.main,
              marginTop: "1rem",
            }}
          >
            <TypewriterEffect
              texts={[
                "Front-end Developer",
                "MERN Stack Developer",
                "Software Developer",
                "Freelancer",
                "Full Stack Developer",
              ]}
              typingSpeed={100}
              deletingSpeed={50}
              pause={1500}
            />
            <Typography variant="span" className="cursor"></Typography>
          </Box>
          <Typography
            component="span"
            sx={{
              fontFamily: theme.otherTypographies.monospace.fontFamily,
              fontSize: "0.7rem",
              color: "#4c956c",
              marginTop: "1rem",
            }}
          >
            {"<p>"}
          </Typography>
          <Typography
            component="p"
            fontWeight="500"
            color={theme.palette.text.primary}
            sx={{
              fontSize: "clamp(0.8rem, 5vw, 1rem)",
            }}
          >
            Building modern, user-friendly websites with passion.
          </Typography>
          <Typography
            component="span"
            sx={{
              fontFamily: theme.otherTypographies.monospace.fontFamily,
              fontSize: "0.7rem",
              color: "#4c956c",
            }}
          >
            {"</p>"}
          </Typography>
        </Box>

        <ProgrammerSvg />
      </Container>
    </Box>
  );
};
