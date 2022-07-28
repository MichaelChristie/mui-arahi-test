import React, { useState } from "react";
// import useState from "react";
import { Switch, Grid, Typography, Button, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// import { green } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
// TO USE ThemeArahi.jsx use theme={theme} and link to the file.
// to use the default or traditional way change to plain <CssVarsProvider>

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
      blah blah
      <Paper sx={{ height: "100vh" }}>
        <Grid container direction="column">
          <Grid item></Grid>
          <Grid item container>
            <Grid item xs={false} lg={1} />
            <Grid item xs={12} lg={10}>
              <Typography variant="h1">hello</Typography>
              <Button variant="contained" color="primary">
                This is a button
              </Button>
              <Button variant="contained" color="secondary">
                This is another button
              </Button>

              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </Grid>
            <Grid item xs={false} lg={1} />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
