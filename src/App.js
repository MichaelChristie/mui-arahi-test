import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Content from "./components/Content";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Bokeh from "./components/Bokeh";

import theme from "./components/ThemeArahi";
import JsonPlayground from "./components/JsonPlayground";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Header />
        <Grid item></Grid>
        <Grid item container>
          <Grid item xs={false} lg={1} />
          <Grid item xs={12} lg={10}>
            <Bokeh />
            <Box
              sx={{
                // bgcolor: "background.paper",
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                m: 2,
              }}
            >
              <Box
                sx={{
                  // bgcolor: "background.paper",
                  boxShadow: 1,
                  borderRadius: 1,
                  p: 2,
                  mb: 2,
                }}
                className="MyClass"
              >
                --color-base-green
              </Box>
              <Content />
            </Box>
          </Grid>
          <Grid item xs={false} lg={1} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
