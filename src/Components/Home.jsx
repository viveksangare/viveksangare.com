import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import PhysicsCanvas from "./PhysicsCanvas";
import { useTheme } from "@emotion/react";
import cuteProgrammer from "../assets/Programmer-cuate.svg";
import "../styles/Home.css";
import RandomPhysicsCanvas from "./RandomPhysicsCanvas";

const Skills = () => {
  const LangIcon = () => {
    return (
      <Box sx={{ minHeight: "300px" }}>
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

export default function Home() {
  const theme = useTheme();

  // window.addEventListener("scroll", () => {
  //   console.log(`Vertical Scroll Position: ${window.scrollY}px`);
  // });

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
          position: "relative",
          height: { xs: `calc(100vh - 56px)`, sm: `calc(100vh - 64px)` },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "100vh",
            width: "100%",
            top: { xs: "-56px", sm: "-64px" },
            left: 0,
          }}
        >
          <RandomPhysicsCanvas />
        </Box>
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
              // padding: "1rem",
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
                  xs: "clamp(0.8rem, 7vw, 2rem)",
                  sm: "clamp(0.1rem, 3vw, 3rem)",
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
                fontSize: {
                  xs: "clamp(0.8rem, 5vw, 1rem)",
                  sm: "clamp(0.8rem, 5vw, 1rem)",
                },
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
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "50%",
              },
              // padding: "1rem",
              // overflow: "hidden",
              // position: "relative",
              // display: "flex",
              height: { xs: "50%", sm: "100%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
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
        </Container>
      </Box>
    );
  };

  return (
    <>
      <Hero />
      {/* <Skills /> */}
      <Box
        sx={{ height: "300px", backgroundColor: "red" }}
        className="red"
      ></Box>
    </>
  );
}
