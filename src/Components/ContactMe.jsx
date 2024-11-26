import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SectionHeader from "./SectionHeader";
import { navIcons } from "../data.js";

export default function ContactMe() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingY: "1.5rem",
      }}
    >
      <SectionHeader
        title="Contact Me"
        quote="Let’s turn ‘Hello’ into something amazing!"
      />
      <Typography component="p" marginBottom="0.5rem">
        Feel free to reach out for collaborations, freelance work, or just to
        say hello! I’m always open to interesting conversations and new
        opportunities.
      </Typography>
      <Typography component="p" marginBottom="0.5rem" width="100%" textAlign="center">
        Drop me an email at:{" "}
        <b>
          <a
            href={`${navIcons[0].link}?subject=Inquiry (from website)&body=Hello, I would like to discuss...`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {navIcons[0].value}
          </a>
        </b>
      </Typography>
      <Box>
        <Typography component="p" width="100%" textAlign="center">
          Connect with me on social media
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <a
            href={navIcons[1].link}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "24px",
              height: "24px",
            }}
          >
            {navIcons[1].icon}
          </a>
          <a
            href={navIcons[2].link}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "24px",
              height: "24px",
            }}
          >
            {navIcons[2].icon}
          </a>
        </Box>
      </Box>
    </Container>
  );
}
