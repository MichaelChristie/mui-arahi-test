import MyData from "../data/tokens.json";
console.log("DarkTheme.jsx" + MyData.global.color.base.blue.value);

const darkTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: MyData.global.color.base.blue.value,
    },
    secondary: {
      main: MyData.global.color.base.yellow.value,
    },
    grey: {
      main: MyData.global.color.base.black75.value,
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
    },
    h1: {
      fontWeight: 600,
      fontFamily: MyData.global.fontFamily.primaryHeading.value,
      fontSize: 48,
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
  },
  components: {
    // Name of the component
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
