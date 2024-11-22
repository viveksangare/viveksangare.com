import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { createElement } from "react";

// nav items
export const navItems = [
    { value: "Home", link: "/" },
    { value: "Projects", link: "/projects" },
];

// nav icons
export const navIcons = [
    {
        name: "Email",
        icon: createElement(EmailIcon),
        link: "mailto:viveksangare23@gmail.com",
    },
    {
        name: "Linkedin",
        icon: createElement(LinkedInIcon),
        link: "https://www.linkedin.com/in/viveksangare/",
    },
    {
        name: "Github",
        icon: createElement(GitHubIcon),
        link: "https://github.com/viveksangare",
    },
];
