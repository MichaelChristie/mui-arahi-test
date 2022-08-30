import MyData from "../data/tokens.json";
console.log("DarkTheme.jsx" + MyData.global.color.base.blue.value);

const darkTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: MyData.global.color.base.blue.value,
    },
    black: {
      main: MyData.global.color.base.black75.value,
      contrastText: MyData.global.color.base.white.value,
    },
    secondary: {
      main: MyData.global.color.base.yellow.value,
    },
    grey: {
      main: "#002a49",
      contrastText: MyData.global.color.base.blue25.value,
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
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
    // Name of the component
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // background: "rgba(0, 0, 0, 0.75);",
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
        },
      },
    },
  },
};

export default darkTheme;
