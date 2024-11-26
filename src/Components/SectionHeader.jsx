import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

export default function SectionHeader({ title, quote }) {
  const theme = useTheme();

  return (
    <Box
      className="two alt-two"
      width="100%"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1.2rem",
      }}
    >
      <Box sx={{ display: "inline-block" }}>
        <Typography
          variant="h2"
          sx={{
            textTransform: "capitalize",
            fontWeight: 400,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            "&:after": {
              content: '""',
              height: "3px",
              backgroundColor: "red",
              display: "block",
              width: "3.8rem",
              position: "relative",
              bottom: "2px",
            },
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        component="span"
        sx={{
          textAlign: "center",
          letterSpacing: "1px",
          color: "#3AAFA9",
          opacity: theme.palette.mode === "dark" ? 0.6 : 1,
        }}
      >
        {quote}
      </Typography>
    </Box>
  );
}
