import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { createElement } from "react";

// nav items
export const navItems = [
    { value: "Home", link: "/" },
    { value: "Projects", link: "/projects" },
];

// nav icons - dont change the sequence (it may break logic on 'Contact Me' section on Home)
export const navIcons = [
    {
        name: "Email",
        icon: createElement(EmailIcon),
        link: "mailto:viveksangare23@gmail.com",
        value:"viveksangare23@gmail.com"
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

// skills
export const skills = [
    {
        name: "Frontend",
        skills: [
            { skill: "HTML", expert: true },
            { skill: "CSS", expert: true },
            { skill: "JavaScript (JS)", expert: true },
            { skill: "React", expert: true },
            { skill: "Redux", expert: true },
            { skill: "Bootstrap", expert: true },
            { skill: "Tailwind", expert: true },
            { skill: "WordPress", expert: true },
        ]
    },
    {
        name: "Backend",
        skills: [
            { skill: "Node.js", expert: true },
            { skill: "Express", expert: true },
        ]
    },
    {
        name: "Database",
        skills: [
            { skill: "MongoDB", expert: true },
        ]
    },
    {
        name: "Tools",
        skills: [
            { skill: "Git", expert: true },
            { skill: "VSCode", expert: true },
            { skill: "Figma", expert: true },
        ]
    },
    {
        name: "Additional Skills",
        skills: [
            { skill: "SEO", expert: true },
            { skill: "Leadership", expert: true },
        ]
    }
]