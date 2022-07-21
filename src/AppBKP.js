import {
  Button,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import { theme1, theme2 } from "./data";
import baseTheme from "./styles/styles";
import Grid from "@mui/material/Grid";

import Content from "./components/Content";
import Header from "./components/Header";

export default function App() {
  const [theme, setTheme] = useState(baseTheme);

  const handleSwitch = (whichTheme) => {
    const newTheme = deepmerge(theme, whichTheme);
    setTheme(createTheme(newTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Grid container direction="column">
        <Grid item></Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />

            <Paper sx={{ height: "600px" }} className="App">
              <Typography color="primary" variant="h4">
                Material UI - Dynamic Theme
              </Typography>
              <Button
                onClick={() => setTheme(baseTheme)}
                variant="contained"
                color="primary"
              >
                Reset
              </Button>
              <Button
                onClick={() => handleSwitch(JSON.parse(theme1))}
                variant="contained"
                color="secondary"
              >
                Theme 1
              </Button>
              <Button onClick={() => handleSwitch(theme2)} variant="contained">
                Theme 2
              </Button>
              <Box>
                <Button variant="contained">I do nothing</Button>
              </Box>
            </Paper>

            {/*  */}
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>

      {/*  */}
    </ThemeProvider>
  );
}
