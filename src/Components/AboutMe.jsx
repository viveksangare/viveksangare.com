import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import "../styles/AboutMe.css";
import SectionHeader from "./SectionHeader";

export default function AboutMe() {
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
        title="About Me"
        quote="Bringing ideas to life through code"
      />
      <Box>
        <Typography component="p" marginBottom="0.8rem">
          Hello, world! 👋 My love for technology started in school, and
          learning HTML, CSS in college (shoutout to the Marquee tag!) amazed
          me. I began as an <b>SEO Specialist</b> but soon realized my true
          passion was building web apps.
        </Typography>
        <Typography component="p" marginBottom="0.8rem">
          Now, I specialize in modern web technologies like React.js, Node.js,
          and JavaScript, blending my SEO background with web development to
          create impactful projects. I’m constantly exploring new tools and
          sharpening my skills, including diving deeper into backend
          technologies like <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>.
        </Typography>
        <Typography component="p" marginBottom="0.8rem">
          I’ve also started learning <b>Data Structures and Algorithms</b> to
          achieve new heights and build smarter, more efficient solutions. When
          I’m not coding, you’ll find me experimenting with ideas or enjoying a
          good cup of coffee. ☕
        </Typography>
        <Typography component="p" marginBottom="0.8rem">
          Want to know more?{" "}
          <Button
            variant="text"
            sx={{ color: "inherit", textDecoration: "underline" }}
          >
            Download My CV
          </Button>
        </Typography>
      </Box>
    </Container>
  );
}
