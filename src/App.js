import * as React from "react";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
  experimental_extendTheme,
} from "@mui/material/styles";
import Moon from "@mui/icons-material/DarkMode";
import Sun from "@mui/icons-material/LightMode";
import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
import { teal, deepOrange, orange, cyan } from "@mui/material/colors";
// import theme from "./components/ThemeArahi";
import MyData from "./data/tokens.json";
import CSSVarTheme from "./components/CSSVarTheme";
import TestButtons from "./components/TestButtons";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Content from "./components/Content";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Bokeh from "./components/Bokeh";

// const theme = experimental_extendTheme({});

export default function App() {
  return (
    <div id="css-vars-custom-themeDELETE">
      <CssVarsProvider>
        {/* <CssVarsProvider theme={theme}> */}
        <Grid container direction="column">
          <Header />
          {/* <ColorSchemePicker /> */}
          <Grid item></Grid>
          <Grid item container>
            <Grid item xs={false} lg={1} />
            <Grid item xs={12} lg={10}>
              <CSSVarTheme />
              <Bokeh />
              {/* <LightAndDarkMode /> */}

              <TestButtons />
              <Content />
            </Grid>
            <Grid item xs={false} lg={1} />
          </Grid>
        </Grid>
      </CssVarsProvider>
    </div>
  );
}
