import * as React from "react";

import { Grid, Paper, Box } from "@mui/material/";
// import theme from "../components/ThemeArahi";
import MainMenu from "../components/MainMenu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../images/aa-insurance-logo-desktop-svg.svg";
import BokehHeader from "./BokehHeader";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

// const theme = experimental_extendTheme({});

export default function Header() {
  return (
    <Box
    // bgcolor="background.paper"
    // sx={{ backgorund: "rgba(255, 255, 255, 0.99);" }}
    >
      <AppBar
        position="fixed"
        // color="white"
        bgcolor="background.paper"
        sx={{
          bgcolor: "inherit",
          backdropFilter: "blur(10px)",
          height: { xs: 64, sm: 64, md: 72, lg: 72, xl: 108 },
        }}
      >
        <BokehHeader />

        <PageLayout>
          <Toolbar>
            <Link to="/">
              <Box
                component="img"
                sx={{
                  // height: 64,
                  width: 180,
                  maxHeight: { xs: 48, lg: 48, xl: 88 },
                  maxWidth: { xs: 120, lg: 120, xl: 180 },
                  my: 1,
                  transition: "all 0.5s ease",
                }}
                alt="AA Insurance"
                src={Logo}
              />
            </Link>
            <Link to="/courses/search">Search</Link>
            <Box sx={{ width: "10px" }} />
            <Link to="/courses/list">List</Link>
            <Box sx={{ width: "10px" }} />
            <Link to="/product/motorcycle">Product</Link>
            <MainMenu />
          </Toolbar>
        </PageLayout>
      </AppBar>
    </Box>
  );
}
