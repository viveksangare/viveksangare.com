import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#3aafa9", // Adjust to your theme
        color: "#fff",
        bottom: 0,
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
          href="https://www.linkedin.com" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://www.instagram.com" // Replace with your Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
