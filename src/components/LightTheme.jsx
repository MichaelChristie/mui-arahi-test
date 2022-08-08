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
    grey: {
      main: MyData.global.color.base.grey.value,
      contrastText: MyData.global.color.base.blue.value,
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
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
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // background: "rgba(255, 255, 255, 0.75);",
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
