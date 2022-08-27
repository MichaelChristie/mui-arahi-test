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
import QuotePage3 from "./pages/QuotePage3";
import Documentation from "./pages/Documentation";
import Campaign from "./pages/Campaign";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEye,
  faEllipsis,
  faHome,
  faTimes,
} from "@fortawesome/pro-light-svg-icons";
import LiveChat from "./components/LiveChat";
import StickyFooterPage from "./components/StickyFooterPage";
import MenuGrid from "./components/navigation/MenuGrid";

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
          {/* <Campaign /> */}

          <StickyFooterPage footerContent={<MenuGrid />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quote" element={<QuotePage1 />} />
              <Route path="/quote2" element={<QuotePage2 />} />
              <Route path="/quote3" element={<QuotePage3 />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/campaign" element={<Campaign />} />
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
              <Box
                sx={{
                  position: "fixed",
                  // width: 56,
                  // height: 56,
                  // background: "#f1f1f1",
                  right: 72,
                  bottom: 16,
                  zIndex: 1,
                }}
              >
                <ShowBreakpoint />
              </Box>
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  position: "fixed",
                  width: 56,
                  height: 56,
                  // background: "#f1f1f1",
                  right: 0,
                  bottom: 0,
                  zIndex: 1,
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
          </StickyFooterPage>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
