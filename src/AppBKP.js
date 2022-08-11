import React, { useState } from "react";
import { Box, Switch } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import ShowBreakpoint from "./components/ShowBreakpoint";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ManagePolicy from "./pages/ManagePolicy";
import Claim from "./pages/Claim";
import Documentation from "./pages/Documentation";
import Error from "./pages/Error";
import Quote from "./pages/Quote";
//Import themes
import darkTheme from "./components/DarkTheme";
import lightTheme from "./components/LightTheme";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Bokeh from "./components/Bokeh";
import PageSpacerMatchHeader from "./components/PageSpacerMatchHeader";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  let theme = darkMode ? createTheme(darkTheme) : createTheme(lightTheme);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Header />
          <Bokeh />
          <PageSpacerMatchHeader />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:producttype" element={<Product />} />
            <Route path="/manage-policy/:username" element={<ManagePolicy />} />
            <Route path="/claim" element={<Claim />} />
            <Route path="/quote" element={<Quote />} />

            <Route path="/documentation" element={<Documentation />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Box>

        <ThemeSwitcher />
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
        <ShowBreakpoint />
      </ThemeProvider>
    </Router>
  );
}

export default App;
