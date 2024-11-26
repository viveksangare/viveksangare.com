import { createTheme } from "@mui/material/styles";

//global fonts
export const commonTypography = {
    body: {
        fontFamily: "'Raleway', sans-serif",
    },
    logo: {
        fontFamily: "'VT323',monospace",
    },
    monospace: {
        fontFamily: "'IBM Plex Mono', monospace"
    }
};

//global transitions
const commonTransitions = {
    duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
    },
}

// common overrides
const commonOverrides = {
    MuiCssBaseline: {
        styleOverrides: {
            '@global': {
                body: {
                    transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)"
                },
            }
        }
    },
    MuiToolbar: {
        styleOverrides: {
            root: {
                paddingLeft: "8px",
                paddingRight: "8px",
                "@media (min-width:600px)": {
                    paddingLeft: "0px",
                    paddingRight: "0px",
                },
            },
        },
    },
}

// global color palettes
const colors = {
    light: {
        background: '#def2f1',  // Main background
        backgroundVariation: '#C5E8E6', // Main background dark varitaion
        bubble: '#CDEBEA', //bubble fill color - slight darker than bg
        paper: '#feffff',       // Surface color
        textPrimary: '#17252a', // Primary text
        textSecondary: '#2b7a78', // Secondary text
        primary: '#3aafa9',     // Primary color
        secondary: '#2b7a78',   // Secondary color
    },
    dark: {
        background: '#17252a',  // Main background
        backgroundVariation: '#243A42', // Main background light variation
        bubble: '#1B2C32', //bubble fill color - slight lighter than bg
        paper: '#2b7a78',       // Surface color
        textPrimary: '#feffff', // Primary text
        textSecondary: '#def2f1', // Secondary text
        primary: '#3aafa9',     // Primary color
        secondary: '#2b7a78',   // Secondary color
    },
};

// Create light mode theme
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: colors.light.background, // App's main background
            paper: colors.light.paper,       // Surface background
            header: "rgba(222, 242, 241, 0.2)", //Header background
            bubble: colors.light.bubble,
            variation: colors.light.backgroundVariation
        },
        text: {
            primary: colors.light.textPrimary,   // Primary text color
            secondary: colors.light.textSecondary, // Secondary text color
        },
        primary: {
            main: colors.light.primary,
        },
        secondary: {
            main: colors.light.secondary,
        },
    },
    typography: {
        fontFamily: commonTypography.body.fontFamily,
        letterSpacing: '0.5px',
        allVariants: {
            letterSpacing: '0.5px',
        },
        h1: { letterSpacing: '0.5px' },
        h2: { letterSpacing: '0.5px' },
        h3: { letterSpacing: '0.5px' },
        h4: { letterSpacing: '0.5px' },
        h5: { letterSpacing: '0.5px' },
        h6: { letterSpacing: '0.5px' },
        body1: { letterSpacing: '0.5px' },
        body2: { letterSpacing: '0.5px' },
    },
    otherTypographies: commonTypography,
    transitions: commonTransitions,
    components: commonOverrides
});

// Create dark mode theme
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: colors.dark.background, // App's main background
            paper: colors.dark.paper,       // Surface background
            header: "rgba(23, 37, 42, 0.2)", //Header background
            bubble: colors.dark.bubble,
            variation: colors.dark.backgroundVariation
        },
        text: {
            primary: colors.dark.textPrimary,   // Primary text color
            secondary: colors.dark.textSecondary, // Secondary text color
        },
        primary: {
            main: colors.dark.primary,
        },
        secondary: {
            main: colors.dark.secondary,
        },
    },
    typography: {
        fontFamily: commonTypography.body.fontFamily,
        letterSpacing: '0.5px',
        allVariants: {
            letterSpacing: '0.5px',
        },
        h1: { letterSpacing: '0.5px' },
        h2: { letterSpacing: '0.5px' },
        h3: { letterSpacing: '0.5px' },
        h4: { letterSpacing: '0.5px' },
        h5: { letterSpacing: '0.5px' },
        h6: { letterSpacing: '0.5px' },
        body1: { letterSpacing: '0.5px' },
        body2: { letterSpacing: '0.5px' },
    },
    otherTypographies: commonTypography,
    transitions: commonTransitions,
    components: commonOverrides
});

// export const lightTheme = createTheme({
//     typography: commonTypography.body,
//     palette: {
//         mode: "light",
//         primary: {
//             main: "#3aafa9", // Bright teal for primary actions
//             dark: "#2b7a78", // Deep teal for secondary elements
//             light: "#def2f1", // Light cyan background for light mode
//             contrastText: "#17252a", // Dark blue-gray text for light mode
//         },
//     },
//     components: {
//         MuiAppBar: {
//             styleOverrides: {
//                 root: {
//                     // color: "#17252a",
//                     backgroundColor: "rgba(222, 242, 241, 0.2)",
//                     backdropFilter: "blur(10px)",
//                 },
//             },
//         },
//         MuiButton: {
//             styleOverrides: {
//                 root: {
//                     color: "#17252a!important",
//                 },
//             },
//         },
//     },
// });

// export const darkTheme = createTheme({
//     typography: commonTypography.body,
//     palette: {
//         mode: "dark",
//         primary: {
//             main: "#2b7a78", // Deep teal for secondary elements in dark mode
//             light: "#3aafa9", // Bright teal for primary actions in dark mode
//             dark: "#17252a", // Dark blue-gray background for dark mode
//             contrastText: "#feffff", // Off-white text for dark mode
//         },
//     },
//     components: {
//         MuiAppBar: {
//             styleOverrides: {
//                 root: {
//                     backgroundColor: "rgba(23, 37, 42, 0.2)",
//                     // backgroundColor: 'red',
//                     backdropFilter: "blur(10px)",
//                 },
//             },
//         },
//         MuiButton: {
//             styleOverrides: {
//                 root: {
//                     color: "#feffff!important",
//                 },
//             },
//         },
//     },
// });

// const { palette: light } = lightTheme;
// const { palette: dark } = darkTheme;
// const root = document.documentElement;

// light theme
// root.style.setProperty("--light-primary-main", light.primary.main);
// root.style.setProperty("--light-primary-light", light.primary.light);
// root.style.setProperty("--light-primary-dark", light.primary.dark);
// root.style.setProperty(
//     "--light-primary-contrastText",
//     light.primary.contrastText
// );

// // dark theme
// root.style.setProperty("--dark-primary-main", dark.primary.main);
// root.style.setProperty("--dark-primary-light", dark.primary.light);
// root.style.setProperty("--dark-primary-dark", dark.primary.dark);
// root.style.setProperty(
//     "--dark-primary-contrastText",
//     dark.primary.contrastText
// );
