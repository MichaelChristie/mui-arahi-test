import * as React from "react";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
  experimental_extendTheme,
} from "@mui/material/styles";
import theme from "./components/ThemeArahi";
import CSSVarTheme from "./components/CSSVarTheme";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Content from "./components/Content";
import Header from "./components/Header";
import Bokeh from "./components/Bokeh";

// TO USE ThemeArahi.jsx use theme={theme} and link to the file.
// to use the default or traditional way change to plain <CssVarsProvider>

export default function App() {
  return (
    <div id="css-vars-custom-themeDELETE">
      {/* <CssVarsProvider> */}
      <CssVarsProvider theme={theme}>
        {/* <Paper> */}
        <Grid container direction="column">
          <Header />
          {/* <ColorSchemePicker /> */}
          <Grid item></Grid>
          <Grid item container>
            <Grid item xs={false} lg={1} />
            <Grid item xs={12} lg={10}>
              <CSSVarTheme />
              <Bokeh />

              <Content />
            </Grid>
            <Grid item xs={false} lg={1} />
          </Grid>
        </Grid>
        {/* </Paper> */}
      </CssVarsProvider>
    </div>
  );
}
