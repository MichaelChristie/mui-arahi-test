import MyData from "../data/tokens.json";
import * as newTokens from "../data/token/build/cjs";

const lightTheme = {
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1278, // was 1200
      xl: 1600, //was 1536
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: newTokens.ColorBaseBlue,
    },
    secondary: {
      main: newTokens.ColorBaseYellow,
    },
    grey: {
      main: newTokens.ColorBaseLightgrey,
      contrastText: newTokens.ColorBaseBlue,
    },
    black: {
      main: newTokens.ColorBaseBlack50,
      contrastText: newTokens.ColorBaseWhite,
    },
    neutral: {
      main: newTokens.ColorBaseGrey,
      contrastText: newTokens.ColorBaseWhite,
    },
    white: {
      main: newTokens.ColorBaseWhite,
      contrastText: newTokens.ColorBaseBlack75,
    },
    error: {
      main: newTokens.ColorStateError,
      contrastText: newTokens.ColorBaseWhite,
    },
    success: {
      main: newTokens.ColorTextSuccess,
      contrastText: newTokens.ColorBaseWhite,
    },
    warning: {
      main: newTokens.ColorBaseYellow,
      contrastText: newTokens.ColorBaseWhite,
    },
    info: {
      main: newTokens.ColorBaseBlue,
      contrastText: newTokens.ColorBaseWhite,
    },
  },
  typography: {
    button: {
      textTransform: "none",
      color: newTokens.ColorBaseBlue,
    },
    h1: {
      fontWeight: newTokens.TypographyH1FontWeight,
      fontFamily: newTokens.TypographyH1FontFamily,
      fontSize: newTokens.TypographyH1FontSize,
      // lineHeight: newTokens.TypographyH1LineHeight,
      letterSpacing: newTokens.TypographyH1LetterSpacing,
      "@media (min-width:900px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontWeight: 600,
      fontFamily: newTokens.TypographyH2FontFamily,
      fontSize: newTokens.TypographyH2FontSize,
      // lineHeight: newTokens.TypographyH2LineHeight,
      letterSpacing: newTokens.TypographyH2LetterSpacing,
      "@media (min-width:600px)": {
        fontSize: "2.4rem",
      },
    },
    h3: {
      fontWeight: 600,
      fontFamily: newTokens.TypographyH3FontFamily,
      fontSize: newTokens.TypographyH3FontSize,
      // lineHeight: newTokens.TypographyH3LineHeight,
      letterSpacing: newTokens.TypographyH3LetterSpacing,
      "@media (min-width:600px)": {
        fontSize: "1.8rem",
      },
    },
    h4: {
      fontWeight: 600,
      fontFamily: newTokens.TypographyH4FontFamily,
      fontSize: newTokens.TypographyH4FontSize,
      // lineHeight: newTokens.TypographyH4LineHeight,
      letterSpacing: newTokens.TypographyH4LetterSpacing,
      "@media (min-width:600px)": {
        fontSize: "1.6rem",
      },
    },
    h5: {
      fontWeight: 600,
      fontFamily: newTokens.TypographyH5FontFamily,
      fontSize: newTokens.TypographyH5FontSize,
      // lineHeight: newTokens.TypographyH5LineHeight,
      letterSpacing: newTokens.TypographyH5LetterSpacing,
      "@media (min-width:600px)": {
        fontSize: "1.4rem",
      },
    },
    h6: {
      fontWeight: 600,
      fontFamily: newTokens.TypographyH6FontFamily,
      fontSize: newTokens.TypographyH6FontSize,
      // lineHeight: newTokens.TypographyH6LineHeight,
      letterSpacing: newTokens.TypographyH6LetterSpacing,
      "@media (min-width:600px)": {
        fontSize: "oneRem",
      },
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          borderBottom: "1px solid transparent !important",
          "&::before": {
            borderBottom: "1px solid transparent !important",
          },
          "&::after": {
            borderBottom: "1px solid transparent !important",
          },
        },
      },
    },
    MuiFilledInput: {
      root: {
        styleOverrides: {
          input: {
            borderBottom: "1px solid transparent !important",
            "&::before": {
              borderBottom: "1px solid transparent !important",
            },
            "&::after": {
              borderBottom: "1px solid transparent !important",
            },
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          // background: "rgba(255, 255, 255, 0.16);", //Annoyingly this makes menus activate a blurred backdrop 🙄
          // backdropFilter: "blur(15px)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: newTokens.BorderRadiusDefault,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: newTokens.BorderRadiusDefault,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: newTokens.ComponentsButtonMediumFontSize,
          fontWeight: newTokens.ComponentsButtonMediumFontWeight,
          borderRadius: 8,
        },
      },
    },
  },
};

export default lightTheme;
