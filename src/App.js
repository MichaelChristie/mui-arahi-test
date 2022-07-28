import React, { useState } from "react";
import { Grid, Paper, Card, Switch, Typography } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

//Import themes
import darkTheme from "./components/DarkTheme";
import lightTheme from "./components/LightTheme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  let theme = darkMode ? createTheme(darkTheme) : createTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Grid container direction="column">
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <Typography variant="h1">Home</Typography>
          <Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            temporibus eum iure aperiam quisquam obcaecati nesciunt inventore
            laudantium, ut, cumque ullam. Dolore itaque eum molestiae, dolor
            laborum iure quisquam cum.
          </Card>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
