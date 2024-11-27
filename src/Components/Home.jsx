import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";

import "../styles/Home.css";

import { Hero } from "./Hero";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import FAQs from "./FAQs";

export default function Home() {
  const theme = useTheme();

  // useEffect(() => {
  //   if (theme) {
  //     return (
  //       <>
  //         <Hero theme1={theme} />
  //         <Box sx={{ backgroundColor: theme.palette.background.bubble }}>
  //           <AboutMe />
  //           <ContactMe />
  //           <FAQs />
  //         </Box>
  //       </>
  //     );
  //   }
  // })

  // return null;
  return (
    <>
      <Hero />
      <Box sx={{ backgroundColor: theme.palette.background.bubble }}>
        <AboutMe />
        <ContactMe />
        <FAQs />
      </Box>
    </>
  );
}
