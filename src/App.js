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
//@ED NEW COMPONENT WHER ONE COULD PUT THE SWITCH AND DEPENDENT FILES
// import MyTheme from "./ThemeSwitcher";
//Import themes
import darkTheme from "./components/DarkTheme";
import lightTheme from "./components/LightTheme";
import Bokeh from "./components/Bokeh";
function App() {
  //@ED IDEALLY WE MOVE THIS LOGIC ELSEWHERE!!
  const [darkMode, setDarkMode] = useState(false);
  let theme = darkMode ? createTheme(darkTheme) : createTheme(lightTheme);

  return (
    //@ED THIS NEEDS TO STAY HERE. ME THINKS
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Bokeh />
      <Paper style={{ height: "100vh", background: "transparent" }}>
        <Header />

        <Box sx={{ p: 6 }}></Box>

        <Grid container direction="column">
          <Grid item></Grid>
          <Grid item container>
            <Grid item xs={false} lg={1} />
            <Grid item xs={12} lg={10}>
              <Typography variant="h1" color="primary">
                Hello
              </Typography>
              <Content />
              {/* //@ED MOVE TO THEMESWITCHER */}
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <Typography variant="h1" color="primary">
                Primary h1
              </Typography>
              <Typography variant="h2" color="grey">
                Secondary h2
              </Typography>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                This is a button
              </Button>
              <Button variant="contained" color="secondary">
                This is another button
              </Button>
              <Card>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                temporibus eum iure aperiam quisquam obcaecati nesciunt
                inventore laudantium, ut, cumque ullam. Dolore itaque eum eum
                molestiae, dolor laborum iure quisquam cum.Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Illo temporibus eum iure
                aperiam quisquam obcaecati nesciunt inventore laudantium, ut,
                cumque ullam. Dolore itaque eum molestiae, dolor laborum iure
                quisquam cum.Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Illo temporibus eum iure aperiam quisquam obcaecati
                nesciunt inventore laudantium, ut, cumque ullam. Dolore itaque
                eum molestiae, dolor laborum iure quisquam cum.
              </Card>
            </Grid>
            <Grid item xs={false} lg={1} />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
