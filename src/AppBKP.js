import React, { useState } from "react";
import {
  Grid,
  Paper,
  Card,
  Box,
  Switch,
  Typography,
  Button,
} from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Content from "./components/Content";
import ShowBreakpoint from "./components/ShowBreakpoint";
import FormGroup from "@mui/material/FormGroup";

import FormControlLabel from "@mui/material/FormControlLabel";

//Import themes
import darkTheme from "./components/DarkTheme";
import lightTheme from "./components/LightTheme";
import MyAppBar from "./components/MyAppBar";
import Bokeh from "./components/Bokeh";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  let theme = darkMode ? createTheme(darkTheme) : createTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Bokeh />
      <Paper style={{ background: "transparent" }} sx={{ p: 2 }}>
        <Header />

        <Box sx={{ p: 6 }}></Box>
        {/* <MyAppBar /> */}
        <Grid container direction="column">
          <Grid item></Grid>
          <Grid item container>
            <Grid item xs={false} lg={1} />
            <Grid item xs={12} lg={10}>
              <Typography variant="h1" color="primary">
                Primary h1
              </Typography>
              {/* <Typography variant="h2" color="grey">
                Secondary h2
              </Typography> */}

              <ShowBreakpoint />

              <Content />

              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                    />
                  }
                  label="Dark Mode"
                />
              </FormGroup>

              {/* <Typography variant="h1" color="primary">
                Primary h1
              </Typography> */}
              {/* <Typography variant="h2" color="grey">
                Secondary h2
              </Typography> */}
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                This is a button
              </Button>
              <Button variant="contained" color="secondary">
                This is another button
              </Button>
              <Card>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                temporibus eum iure aperiam quisquam obcaecati nesciunt
              </Card>
              {/*  */}
            </Grid>
            <Grid item xs={false} lg={1} />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
