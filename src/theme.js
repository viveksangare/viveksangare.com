import { createTheme } from "@mui/material/styles";

export const commonTypography = {
    body: {
        fontFamily: "'Raleway', sans-serif",
    },
    logo: {
        fontFamily: "'VT323',monospace",
    }
};

export const lightTheme = createTheme({
    typography: commonTypography.body,
    palette: {
        primary: {
            main: "#3aafa9", // Bright teal for primary actions
            dark: "#2b7a78", // Deep teal for secondary elements
            light: "#def2f1", // Light cyan background for light mode
            contrastText: "#17252a", // Dark blue-gray text for light mode
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    color: "#17252a",
                    backgroundColor: '#def2f1', // Light blue button for dark mode
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#17252a!important",
                },
            },
        }
    }
});

export const darkTheme = createTheme({
    typography: commonTypography.body,
    palette: {
        primary: {
            main: "#2b7a78", // Deep teal for secondary elements in dark mode
            light: "#3aafa9", // Bright teal for primary actions in dark mode
            dark: "#17252a", // Dark blue-gray background for dark mode
            contrastText: "#feffff", // Off-white text for dark mode
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#17252a', // Light blue button for dark mode
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#feffff!important",
                },
            },
        }
    }
});

const { palette: light } = lightTheme;
const { palette: dark } = darkTheme;
const root = document.documentElement;

// light theme
root.style.setProperty("--light-primary-main", light.primary.main);
root.style.setProperty("--light-primary-light", light.primary.light);
root.style.setProperty("--light-primary-dark", light.primary.dark);
root.style.setProperty("--light-primary-contrastText", light.primary.contrastText);

// dark theme
root.style.setProperty("--dark-primary-main", dark.primary.main);
root.style.setProperty("--dark-primary-light", dark.primary.light);
root.style.setProperty("--dark-primary-dark", dark.primary.dark);
root.style.setProperty("--dark-primary-contrastText", dark.primary.contrastText);