import * as React from "react";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
  experimental_extendTheme,
} from "@mui/material/styles";
import Moon from "@mui/icons-material/DarkMode";
import Sun from "@mui/icons-material/LightMode";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { teal, deepOrange, orange, cyan } from "@mui/material/colors";
// import theme from "../components/ThemeArahi";
import MyData from "../data/tokens.json";
import CSSVarTheme from "./CSSVarTheme";
import TestButtons from "./TestButtons";
import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Content from "../components/Content";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Bokeh from "../components/Bokeh";
import LightAndDarkMode from "../components/LightAndDarkMode-controls1.jsx";

const theme = experimental_extendTheme({});

const useEnhancedEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export default function Header() {
  return (
    <div id="css-vars-custom-theme">
      {/* <CSSVarTheme /> */}
      <CssVarsProvider theme={theme}>
        <Grid container direction="column">
          {/* <ColorSchemePicker /> */}
          <Grid item></Grid>
          <Grid item container>
            <Grid item xs={false} lg={1} />
            <Grid item xs={12} lg={10}>
              Header.jsx
              {/* <CSSVarTheme /> */}
              <LightAndDarkMode />
              {/* <CSSVariables /> */}
              {/* <TestButtons /> */}
            </Grid>
            <Grid item xs={false} lg={1} />
          </Grid>
        </Grid>
      </CssVarsProvider>
    </div>
  );
}
