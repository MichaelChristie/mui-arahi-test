import MyData from "../data/tokens.json";
console.log("LightTheme.jsx" + MyData.global.color.base.blue.value);

const lightTheme = {
  palette: {
    mode: "light",
    primary: {
      main: MyData.global.color.base.blue.value,
    },
    secondary: {
      main: MyData.global.color.base.yellow.value,
    },
    // action: {
    // active: MyData.global.color.base.blue.value,
    // activeOpacity: 1,
    // hover: MyData.global.color.base.blue.value,
    // hoverOpacity: 0.1,
    // focus: MyData.global.color.base.blue.value,
    // focusOpacity: 0.5,
    // selected: MyData.global.color.base.blue.value,
    // selectedOpacity: 1,
    // },
    grey: {
      main: MyData.global.color.base.grey.value,
      contrastText: MyData.global.color.base.blue.value,
    },
    black: {
      main: MyData.global.color.base.black75.value,
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
  },

  typography: {
    button: {
      textTransform: "none",
      color: MyData.global.color.base.blue.value,
    },
    h1: {
      fontWeight: 800,
      fontFamily: MyData.global.fontFamily.primaryHeading.value,
      fontSize: 56,
    },
    h2: {
      fontWeight: 600,
      fontFamily: MyData.global.fontFamily.primaryHeading.value,
    },
    h3: {
      fontWeight: 600,
      fontFamily: "Arial",
    },
    h4: {
      fontWeight: 600,
      fontFamily: "Arial",
    },
    h5: {
      fontWeight: 600,
      fontFamily: "Arial",
    },
    h6: {
      fontWeight: 600,
      fontFamily: "Arial",
      lineHeight: 1.4,
      letterSpacing: 0.125,
    },
  },
  components: {
    // Name of the component

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
          backgroundColor: "green !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          fontWeight: "600",
          // backgroundColor: "#FF0000",
        },
      },
    },
  },
};

export default lightTheme;
