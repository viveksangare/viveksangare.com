import {
  Avatar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
// import PhysicsCanvas from "./PhysicsCanvas";
import { useTheme } from "@emotion/react";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import DownloadIcon from "@mui/icons-material/Download";
import cuteProgrammer from "../assets/Programmer-cuate.svg";
import avatarImage from "../assets/avatar_vivek-sangare.jpeg";
import { skills } from "../data";
import "../styles/Home.css";
import RandomPhysicsCanvas from "./RandomPhysicsCanvas";
import ProgrammerSvg from "./ProgrammerSvg";
import { Hero } from "./Hero";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Hero />
      <Box sx={{ backgroundColor: theme.palette.background.bubble }}>
        <AboutMe />
        <ContactMe/>
      </Box>
    </>
  );
}
