import { Box, Button, SvgIcon, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import PhysicsCanvas from "./PhysicsCanvas";
import { useTheme } from "@emotion/react";
import cuteProgrammer from "../assets/Programmer-cuate.svg";
import "../styles/Home.css";
import RandomPhysicsCanvas from "./RandomPhysicsCanvas";

export default function Home() {
  const theme = useTheme();

  const Hero = () => {
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
          // height: "100%",
          height: `calc(100vh - 64px)`,
          // zIndex: 1100,
          // pointerEvents: "none",
          position: "relative",
          // overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            // maxHeight: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "50%",
              },
              color: "#2B7A78",
              padding: "1rem",
            }}
          >
            <Typography variant="h5" fontWeight="500">
              Hi There!
              <Typography variant="span" className="wave" marginLeft="10px">
                👋
              </Typography>
            </Typography>
            <Typography variant="h3">
              I&apos;m{" "}
              <Typography
                variant="span"
                fontWeight="600"
                color={theme.palette.primary.contrastText}
              >
                Vivek Sangare
              </Typography>
            </Typography>
            <Box
              sx={{
                fontFamily: "monospace",
                fontSize: "24px",
                color: "#4c956c",
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
          </Box>

          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "50%",
              },
              padding: "1rem",
              // overflow: "hidden",
              // position: "relative",
              // display: "flex",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={cuteProgrammer}
              alt="Sample Image"
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "8px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ width: "100%", padding: "1rem" }}>
          <Button
            variant="contained"
            sx={{
              display: "block",
              pointerEvents: "all",
              "&:hover": { transform: "scale(1.1)" },
              transition: ".3s",
              margin: "auto",
            }}
          >
            About Me
          </Button>
        </Box>
      </Box>
    );
  };

  const Skills = () => {
    const LangIcon = () => {
      return (
        <Box sx={{minHeight:"300px"}}>
          <Box>
            <SvgIcon>
              {/* credit: icon from https://icons8.com/ */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" />
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
                <path
                  fill="#FFF"
                  d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                />
                <path
                  fill="#EEE"
                  d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                />
              </svg>
            </SvgIcon>
          </Box>
          <Typography variant="p">HTML</Typography>
        </Box>
      );
    };

    return (
      <Box>
        <Box>
          <Typography variant="h3">Skills</Typography>
          <Typography variant="p">
            I am striving to never stop learning and improving
          </Typography>
        </Box>
        <Box>
          <LangIcon />
        </Box>
      </Box>
    );
  };

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
          // zIndex: 1,
        }}
      >
        {/* <PhysicsCanvas /> */}
      {/* <RandomPhysicsCanvas/> */}
      </Box>
      <Hero />
      <Skills></Skills>
    </>
  );
}
