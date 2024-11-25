import { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import DownloadIcon from "@mui/icons-material/Download";
import cuteProgrammer from "../assets/Programmer-cuate.svg";
import avatarImage from "../assets/avatar_vivek-sangare.jpeg";
import { useTheme } from "@emotion/react";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = useTheme();
  const svgRef = useRef(null);

  // handle flip
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  // handle coffe click
  function handleCoffeeClick(setIsFlipped) {
    setIsFlipped(true);

    // Set a timer to flip the state back after 30 seconds
    setTimeout(() => {
      setIsFlipped(false);
    }, 15000); // 15 seconds

    const svgDoc = svgRef.current.contentDocument;
    const speechBubble = svgDoc.getElementById("freepik-custom-speech-bubble");
    speechBubble.style.visibility = "hidden";
  }

  // add click event listener on coffee cup
  useEffect(() => {
    const objectElement = svgRef.current;
    let timeoutId;

    const onLoad = () => {
      const svgDoc = objectElement.contentDocument;
      if (svgDoc) {
        const coffeeCup = svgDoc.getElementById("freepik--Coffee--inject-18");
        const speechBubble = svgDoc.getElementById(
          "freepik-custom-speech-bubble"
        );
        if (coffeeCup) {
          coffeeCup.addEventListener("click", () =>
            handleCoffeeClick(setIsFlipped)
          );
        }
        if (speechBubble) {
          speechBubble.style.transition = "opacity 1s ease-in-out";

          // Set visibility and opacity after 3 seconds
          timeoutId = setTimeout(() => {
            speechBubble.style.opacity = "1";
          }, 3000);
        }
      }
    };

    objectElement.addEventListener("load", onLoad);

    return () => {
      objectElement.removeEventListener("load", onLoad);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // calculate 'year of experience' dynamically
  function calculateExperience(startDate) {
    const start = new Date(startDate);
    const now = new Date();

    // Calculate the difference in months
    const totalMonths =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth());

    // Convert months into years and remaining months
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    // Build the output string
    const yearPart = years > 0 ? `${years} yr` : "";
    const monthPart = months > 0 ? `${months} mo` : "";

    // Combine parts with proper spacing
    return [yearPart, monthPart].filter(Boolean).join(" ");
  }

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "50%" },
        height: { xs: "50%", sm: "100%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        position: "relative",
        // perspective: "1000px", // Enables the 3D effect
      }}
    >
      {/* Flip Card Wrapper */}
      <Box
        sx={{
          width: { xs: "auto", sm: "100%" },
          height: { xs: "100%", sm: "auto" },
          maxHeight: "100%",
          maxWidth: "100%",
          // width: "100%",
          // height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.8s",
          perspective: "1000px", // Enables the 3D effect
          aspectRatio: "1/1",
        }}
      >
        {/* Front Side */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: "8px",
          }}
        >
          <Box
            component="object"
            data={cuteProgrammer}
            type="image/svg+xml"
            id="Programmer-SVG"
            ref={svgRef}
            sx={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Back Side */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: "8px",
            transform: "rotateY(180deg)",
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              background: theme.palette.background.default,
              boxShadow: `-4px -4px 8px ${theme.palette.primary.main}`,
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
              aspectRatio: "1/1",
              flexGrow: 1,
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
            {/* content starts */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "0.5rem",
                maxWidth: "100%",
              }}
            >
              <Avatar
                alt="Vivek Sangare"
                src={avatarImage}
                sx={{
                  width: "clamp(40px, 6vw, 100px)",
                  height: "clamp(40px, 6vw, 100px)",
                  border: `3px solid ${theme.palette.primary.main}`,
                  borderRadius: "50%",
                }}
              />
              <Typography
                variant="h6"
                fontWeight="700"
                letterSpacing="1px"
                sx={{
                  fontSize: "clamp(0.9rem, 2vw, 1.5rem)",
                }}
              >
                Vivek
              </Typography>
              <Typography
                component="p"
                fontWeight="500"
                sx={{
                  fontSize: "clamp(0.8rem, 2vw, 1rem)",
                  fontFamily: theme.otherTypographies.monospace.fontFamily,
                  textAlign: "center",
                }}
              >
                Full-stack Developer
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <List
                sx={{
                  width: "100%",
                  padding: 0,
                  marginBottom: "8px",
                }}
              >
                <ListItem disablePadding>
                  <ListItemIcon
                    sx={{
                      minWidth: "0px",
                      marginRight: "8px",
                    }}
                  >
                    <LocationOnIcon
                      sx={{ fontSize: "clamp(14px, 3vw, 16px)" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Pune, India"
                    primaryTypographyProps={{
                      letterSpacing: "1px",
                      fontSize: "clamp(0.8rem, 2vw, 1rem)",
                    }}
                    sx={{ margin: 0 }}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon
                    sx={{
                      minWidth: "0px",
                      marginRight: "8px",
                    }}
                  >
                    <WorkIcon sx={{ fontSize: "clamp(14px, 3vw, 16px)" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Full-time / Freelancer"
                    primaryTypographyProps={{
                      letterSpacing: "1px",
                      fontSize: "clamp(0.8rem, 2vw, 1rem)",
                    }}
                    sx={{ margin: 0 }}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon
                    sx={{
                      minWidth: "0px",
                      marginRight: "8px",
                    }}
                  >
                    <WorkHistoryIcon
                      sx={{ fontSize: "clamp(14px, 3vw, 16px)" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Experience: ${calculateExperience("2022-10-01")}`}
                    primaryTypographyProps={{
                      letterSpacing: "1px",
                      fontSize: "clamp(0.8rem, 2vw, 1rem)",
                    }}
                    sx={{ margin: 0 }}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon
                    sx={{
                      minWidth: "0px",
                      marginRight: "8px",
                    }}
                  >
                    <EmailIcon sx={{ fontSize: "clamp(14px, 3vw, 16px)" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="viveksangare23@gmail.com"
                    primaryTypographyProps={{
                      letterSpacing: "1px",
                      fontSize: "clamp(0.8rem, 2vw, 1rem)",
                      margin: 0,
                    }}
                    sx={{ margin: 0 }}
                  />
                </ListItem>
              </List>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: "32px",
                  textTransform: "none",
                  letterSpacing: "1px",
                  textAlign: "center",
                  width: "170px",
                }}
              >
                Download CV{" "}
                <DownloadIcon fontSize="1rem" sx={{ marginLeft: "4px" }} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// test
