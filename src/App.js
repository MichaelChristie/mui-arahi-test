import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
// import Product from "./pages/Product";
import Product from "./pages/Product";
import Search from "./components/Search";
import List from "./components/List";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Switch, Button, Divider, IconButton } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ShowBreakpoint from "./components/ShowBreakpoint";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
//Import themes`
import darkTheme from "./components/DarkTheme";
import lightTheme from "./components/LightTheme";
import QuotePage1 from "./pages/QuotePage1";
import QuotePage2 from "./pages/QuotePage2";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEye,
  faEllipsis,
  faHome,
  faTimes,
} from "@fortawesome/pro-light-svg-icons";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // USED FOR HIDING THE page controls in a menu

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //

  let theme = darkMode ? createTheme(darkTheme) : createTheme(lightTheme);
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Quote /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<QuotePage1 />} />
            <Route path="/quote2" element={<QuotePage2 />} />
            {/* <Route path="/clipped-drawer" element={<ClippedDrawer />} /> */}
            <Route path="/drawer" element={<ResponsiveDrawer />} />
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

          {/* // */}

          <div>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                position: "absolute",
                width: 56,
                height: 56,
                // background: "#FF0000",
                right: 0,
                bottom: 0,
              }}
            >
              <FontAwesomeIcon icon={faEllipsis} fontSize="large" />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faTimes} fontSize="large" />
                </ListItemIcon>
                <ListItemText>Hidden Controls</ListItemText>
              </MenuItem>

              <Divider />

              <MenuItem component={Link} to={"/"}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faHome} fontSize="large" />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </MenuItem>

              <MenuItem component={Link} to={"/"}>
                <ListItemIcon>
                  <ShowBreakpoint />
                </ListItemIcon>
                <ListItemText>Breakpoint</ListItemText>
              </MenuItem>

              <MenuItem>
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
              </MenuItem>
            </Menu>
          </div>

          {/* // */}
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
