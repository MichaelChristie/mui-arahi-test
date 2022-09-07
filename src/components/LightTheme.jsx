import MyData from "../data/tokens.json";
console.log("LightTheme.jsx" + MyData.global.color.base.blue.value);

const lightTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600, //was 1536
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: MyData.global.color.base.blue.value,
    },
    secondary: {
      main: MyData.global.color.base.yellow.value,
    },
    grey: {
      main: MyData.global.color.base.grey.value,
      contrastText: MyData.global.color.base.blue.value,
    },
    black: {
      main: MyData.global.color.base.black50.value,
      contrastText: MyData.global.color.base.white.value,
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    white: {
      main: "#FFFFFF",
      contrastText: "#000",
    },
    error: {
      main: "#EE6363", //Make linked value
      contrastText: MyData.global.color.base.white.value,
    },
    success: {
      main: "#39D3AB", //Make linked value
      contrastText: MyData.global.color.base.white.value,
    },
    warning: {
      main: "#FFD400",
      contrastText: MyData.global.color.base.white.value,
    },
    info: {
      main: "#0076C4",
      contrastText: MyData.global.color.base.white.value,
    },
  },
  typography: {
    button: {
      textTransform: "none",
      color: MyData.global.color.base.blue.value,
    },
    h1: {
      fontWeight: 800,
      fontFamily: MyData.global.fontFamily.primaryHeading.value,
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
      // [theme.breakpoints.up("md")]: {
      //   fontSize: "4rem",
      // },
    },
    h2: {
      fontWeight: 600,
      fontFamily: MyData.global.fontFamily.primaryHeading.value,
      fontSize: "1.8rem",
      "@media (min-width:600px)": {
        fontSize: "2.4rem",
      },
    },
    h3: {
      fontWeight: 600,
      fontFamily: "Arial",
      fontSize: "1.6rem",
      "@media (min-width:600px)": {
        fontSize: "1.8rem",
      },
    },
    h4: {
      fontWeight: 600,
      fontFamily: "Arial",
      fontSize: "1.4rem",
      "@media (min-width:600px)": {
        fontSize: "1.6rem",
      },
    },
    h5: {
      fontWeight: 600,
      fontFamily: "Arial",
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.4rem",
      },
    },
    h6: {
      fontWeight: 600,
      fontFamily: "Arial",
      lineHeight: 1.4,
      letterSpacing: 0.125,
      fontSize: "1.1rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
  },

  components: {
    // MuiContainer: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 80,
    //     },
    //   },
    // },
    MuiInputBase: {
      styleOverrides: {
        input: {
          // color: "lime",
          borderBottom: "1px solid transparent !important", // use your color

          "&::before": {
            borderBottom: "1px solid transparent !important", // use your color
          },
          "&::after": {
            borderBottom: "1px solid transparent !important", // use your color
          },
        },
      },
    },

    MuiFilledInput: {
      root: {
        styleOverrides: {
          input: {
            // color: "lime",
            borderBottom: "1px solid transparent !important", // use your color

            "&::before": {
              borderBottom: "1px solid transparent !important", // use your color
            },
            "&::after": {
              borderBottom: "1px solid transparent !important", // use your color
            },
          },
        },
      },
    },

    MuiBackdrop: {
      styleOverrides: {
        // Name of the slot

        root: {
          // Some CSS
          // background: "rgba(255, 255, 255, 0.16);",
          // backdropFilter: "blur(15px)",
        },
      },
    },
    MuiAccordion: {
      root: {
        "&:before": {
          // backgroundColor: "#FF0000 !important",
          opacity: "0",
          display: "none !important",
        },
      },
    },
    // MuiExpansionPanel: {
    //   root: {
    //     "&:before": {
    //       display: "none",
    //       backgroundColor: "#FF0000",
    //     },
    //   },
    // },
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // background: "rgba(255, 255, 255, 0.75);",
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: "50px !important",
          // backgroundColor: "#FF0000",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          padding: "0px !important",
          // backgroundColor: "green !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 8,
    //     },
    //   },
    // },
    // MuiTextField: {
    //   defaultProps: {
    //     borderRadius: 8,
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          fontWeight: "600",
          borderRadius: 8,

          // backgroundColor: "#FF0000",
        },
      },
    },
  },
};

export default lightTheme;
