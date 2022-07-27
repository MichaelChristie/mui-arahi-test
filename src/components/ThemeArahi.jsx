// import { CssVarsProvider, createTheme } from "@mui/joy/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";
import MyData from "../data/tokens.json";

console.log("ThemeArahi" + MyData.global.color.base.blue.value);

const theme = createTheme({
  palette: {
    primary: {
      light: MyData.global.color.base.yellow.value,
      main: MyData.global.color.base.blue.value,
      dark: MyData.global.color.base.yellow.value,
      contrastText: MyData.global.color.base.white.value,
    },
    secondary: {
      light: MyData.global.color.base.lightgrey.value,
      main: MyData.global.color.base.lightgrey.value,
      // main: --light-error-contrast,
      contrastText: MyData.global.color.base.blue.value,
    },
    success: {
      light: MyData.global.color.base.green50.value,
      main: MyData.global.color.base.green.value,
      dark: MyData.global.color.base.green50.value,
      contrastText: MyData.global.color.base.white.value,
    },
    warning: {
      light: MyData.global.color.base.yellow50.value,
      main: MyData.global.color.base.yellow50.value,
      dark: MyData.global.color.base.yellow50.value,
      contrastText: MyData.global.color.base.white.value,
    },
    info: {
      light: MyData.global.color.base.blue25.value,
      main: MyData.global.color.base.blue25.value,
      dark: MyData.global.color.base.blue25.value,
      contrastText: MyData.global.color.base.darkblue.value,
    },
    error: {
      light: MyData.global.color.base.red.value,
      main: MyData.global.color.base.red.value,
      dark: MyData.global.color.base.red.value,
      contrastText: MyData.global.color.base.darkblue.value,
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 0,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.3,
  },

  typography: {
    fontFamily: [
      "Arial",
      "Roboto",
      '"Helvetica Neue"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "FSLola",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "italic",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontWeight: 600,
      color: MyData.global.color.base.blue.value,
      // fontSize: global.Typography.H1.value.fontSize.value,
      fontFamily: MyData.global.fontFamily.primaryHeading.value,
    },
    h2: {
      fontWeight: 600,
      color: MyData.global.color.base.blue.value,
      // fontSize: global.Typography.H1.value.fontSize.value,
      fontFamily: MyData.global.fontFamily.primaryHeading.value,
    },
  },
});

export default theme;
