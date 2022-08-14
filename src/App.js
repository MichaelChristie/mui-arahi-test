import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
// import Product from "./pages/Product";
import Brochure from "./components/Brochure";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Search from "./components/Search";
import List from "./components/List";

import { Box, Switch } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ShowBreakpoint from "./components/ShowBreakpoint";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

//Import themes`
import darkTheme from "./components/DarkTheme";
import lightTheme from "./components/LightTheme";
import Quote from "./pages/Quote";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  let theme = darkMode ? createTheme(darkTheme) : createTheme(lightTheme);
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Quote /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<Quote />} />
            {/* <Route path="/product" element={<Product />} /> */}
            <Route path="/courses" element={<Courses />}>
              {/* <Route path="/product" element={<Product />} /> */}
              <Route path="search" element={<Search />} />
              <Route path="list" element={<List />} />
            </Route>

            <Route path="/product" element={<Product />}>
              {/* <Route path="/product" element={<Product />} /> */}
              <Route path="search" element={<Search />} />
              <Route path="list" element={<List />} />
            </Route>
          </Routes>
          <nav>
            <Link to="/">HomeHilux</Link>
            <Link to="courses">Courses</Link>
          </nav>
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
    </div>
  );
}

export default App;
