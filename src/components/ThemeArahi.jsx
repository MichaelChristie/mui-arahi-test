// import { CssVarsProvider, createTheme } from "@mui/joy/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";
import MyData from "../data/tokens.json";

console.log("ThemeArahi" + MyData.global.color.base.blue.value);

const theme = createTheme({
  palette: {
    primary: {
      light: MyData.global.color.base.midblue.value,
      main: MyData.global.color.base.darkblue.value,
      contrastText: MyData.global.color.base.white.value,
    },
    secondary: {
      light: MyData.global.color.base.lightgrey.value,
      main: MyData.global.color.base.lightgrey.value,
      // main: --light-error-contrast,
      contrastText: MyData.global.color.base.blue.value,
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
  typography: {
    poster: {
      color: "red",
    },
    // Disable h3 variant
    h3: {
      color: "red",
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
    // fontFamily: "FSLola, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'FSLola';
          font-style: bold;
          font-display: swap;
          font-weight: 800;
        }
      `,
    },
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: false, // No more ripple, on the whole application 💣!
      },
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
  },
});

export default theme;
