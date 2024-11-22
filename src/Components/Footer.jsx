import { Box, Typography, Container, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { navIcons } from "../data.js";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: "#17252a",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 0",
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: {xs:"2px",sm:0},
              flexWrap: "wrap",
            }}
          >
            {navIcons.map((item) => (
              <Button
                key={item.name}
                sx={{ color: theme.palette.text.primary, minWidth: 0 }}
              >
                {item.icon}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
