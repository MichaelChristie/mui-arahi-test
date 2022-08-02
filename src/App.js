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
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
//Import themes
import darkTheme from "./components/DarkTheme";
import lightTheme from "./components/LightTheme";
import MyAppBar from "./components/MyAppBar";
import Bokeh from "./components/Bokeh";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  let theme = darkMode ? createTheme(darkTheme) : createTheme(lightTheme);

  return (
    <Router>
      {/* <a href="/home">Go to home page</a> */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile/pedro">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
