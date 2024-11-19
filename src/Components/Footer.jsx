import { Box, Typography, IconButton, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { lightTheme, darkTheme, commonTypography } from "../theme.js";

const Footer = () => {
  const theme = useTheme(); 

  return (
    <Box
      component="footer"
      sx={{
        zIndex: "1100",
        bottom: 0,
        backgroundColor: lightTheme.palette.primary.dark,
        color: "#fff",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",

            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            // color: "#fff",

            width: "100%",
          }}
        >
          {/* Left Div */}
          <Typography variant="body2" sx={{ fontWeight: "300" }}>
            Designed & Developed by{" "}
            <Typography variant="span" sx={{ fontWeight: "500" }}>
              Vivek Sangare
            </Typography>
          </Typography>

          {/* Right Div */}
          <Box>
            <IconButton
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff" }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
