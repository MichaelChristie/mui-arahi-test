import * as React from "react";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
  experimental_extendTheme,
} from "@mui/material/styles";
import Moon from "@mui/icons-material/DarkMode";
import Sun from "@mui/icons-material/LightMode";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { teal, deepOrange, orange, cyan } from "@mui/material/colors";
// import theme from "./components/ThemeArahi";
import MyData from "../data/tokens.json";

const ColorSchemePicker = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
    >
      {mode === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

const theme = experimental_extendTheme({
  palette: {
    primary: {
      light: MyData.global.color.base.midblue.value,
      dark: MyData.global.color.base.blue.value,
      main: MyData.global.color.base.darkblue.value,
      // main: `var(--light-warning-main)`,
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

const useEnhancedEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default function LightAndDarkMode() {
  // the `node` is used for attaching CSS variables to this demo, you might not need it in your application.
  const [node, setNode] = React.useState(null);
  useEnhancedEffect(() => {
    setNode(document.getElementById("css-vars-custom-theme"));
  }, []);
  return (
    <div id="css-vars-custom-theme">
      <CssVarsProvider
        theme={theme}
        colorSchemeNode={node || null}
        colorSchemeSelector="#css-vars-custom-theme"
        colorSchemeStorageKey="custom-theme-color-scheme"
        modeStorageKey="custom-theme-mode"
      >
        <Box bgcolor="background.paper" sx={{ p: 1 }}>
          <Box sx={{ py: 2, mx: "auto" }}>
            <Box sx={{ pb: 4 }}>
              <ColorSchemePicker />
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
              <Button variant="contained">Text</Button>
              <Button variant="outlined">Text</Button>
              <Button>Text</Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
              <Button color="secondary" variant="contained">
                Text
              </Button>
              <Button color="secondary" variant="outlined">
                Text
              </Button>
              <Button color="secondary">Text</Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
              <Button color="error" variant="contained">
                Text
              </Button>
              <Button color="error" variant="outlined">
                Text
              </Button>
              <Button color="error">Text</Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
              <Button color="info" variant="contained">
                Text
              </Button>
              <Button color="info" variant="outlined">
                Text
              </Button>
              <Button color="info">Text</Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
              <Button color="warning" variant="contained">
                Text
              </Button>
              <Button color="warning" variant="outlined">
                Text
              </Button>
              <Button color="warning">Text</Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
              <Button color="success" variant="contained">
                Text
              </Button>
              <Button color="success" variant="outlined">
                Text
              </Button>
              <Button color="success">Text</Button>
            </Box>
          </Box>
        </Box>
      </CssVarsProvider>
    </div>
  );
}
