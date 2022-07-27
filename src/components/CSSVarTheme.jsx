import * as React from "react";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
  experimental_extendTheme,
} from "@mui/material/styles";
import { teal, deepOrange, orange, cyan } from "@mui/material/colors";
// import theme from "./ThemeArahi";
import MyData from "../data/tokens.json";

const theme = experimental_extendTheme({
  palette: {
    primary: {
      light: "#FFD400 !important",
      dark: "#FFD400 !important",
      main: "#CCCCCC !important",
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
});

const useEnhancedEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default function CSSVarTheme() {
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
      ></CssVarsProvider>
    </div>
  );
}
