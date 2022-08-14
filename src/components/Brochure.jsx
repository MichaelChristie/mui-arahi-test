import React, { useState } from "react";
import { Box, Switch } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ShowBreakpoint from "../components/ShowBreakpoint";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "../pages/Home";
// import Product from "../pages/Product";
import Products from "../pages/Products";
import ManagePolicy from "../pages/ManagePolicy";
import Claim from "../pages/Claim";
import Documentation from "../pages/Documentation";
import Error from "../pages/Error";
import Quote from "../pages/Quote";

//Import themes
import darkTheme from "../components/DarkTheme";
import lightTheme from "../components/LightTheme";
// import Header from "../components/Header";
import ThemeSwitcher from "../components/ThemeSwitcher";
// import Bokeh from "../components/Bokeh";
// import PageSpacerMatchHeader from "../components/PageSpacerMatchHeader";
function Brochure() {
  const [darkMode, setDarkMode] = useState(false);

  let theme = darkMode ? createTheme(darkTheme) : createTheme(lightTheme);

  return (
    <>
      DELETE
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:producttype" element={<Products />} />
        <Route path="/manage-policy/:username" element={<ManagePolicy />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="/quote" element={<Quote />} />

        <Route path="/documentation" element={<Documentation />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default Brochure;
