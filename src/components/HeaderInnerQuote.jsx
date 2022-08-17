import * as React from "react";

import { Grid, Paper, Box, Typography } from "@mui/material/";
// import theme from "../components/ThemeArahi";
import MainMenu from "./MainMenu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BokehHeader from "./BokehHeader";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import Logo from "./Logo";
import HeaderIcons from "./HeaderIcons";
import MainMenuQuote from "./MainMenuQuote";
import QuoteProgress from "../components/QuoteProgress";
// const theme = experimental_extendTheme({});

export default function HeaderInnerQuote() {
  return (
    <Box
    // bgcolor="background.paper"
    // sx={{ backgorund: "rgba(255, 255, 255, 0.99);" }}
    >
      <AppBar
        position="fixed"
        // color="white"
        sx={{
          bgcolor: "inherit",
          backdropFilter: "blur(10px)",
          height: { xs: 64, sm: 64, md: 72, lg: 72, xl: 80 },
          zIndex: (theme) => theme.zIndex.drawer + 1, // Makes the header above the menu
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box
            sx={{
              flexGrow: 1,
              // background: "rgba(50,150,50,0.5)",
              height: "100%",
            }}
          >
            <BokehHeader />
            <PageLayout>
              <Toolbar>
                <Logo />
                <MainMenuQuote />
              </Toolbar>
            </PageLayout>
          </Box>
          <Box
            sx={{
              flexShrink: 1,
              // background: "rgba(150,150,50,0.5)",
              // height: "28px",
              mt: -1,
            }}
          >
            <QuoteProgress />
          </Box>
        </Box>

        {/* <QuoteProgress /> */}
      </AppBar>
    </Box>
  );
}
