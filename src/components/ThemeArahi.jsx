// import { CssVarsProvider, createTheme } from "@mui/joy/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      light: "#f1f1f1",
      main: "#f1f1f1",

      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: "#0076c2",
    },
    secondary: {
      light: "#0076c2",
      main: "#0076c2",

      // dark: will be calculated from palette.secondary.main,
      contrastText: "#FFF",
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
      '"Helvetica Neue"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
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
  },
});

export default theme;
