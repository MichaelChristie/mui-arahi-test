import * as React from "react";

import { Grid, Paper, Box } from "@mui/material/";
// import theme from "../components/ThemeArahi";
import MainMenu from "./MainMenu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BokehHeader from "./BokehHeader";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import PageMargin from "./pageMargin";
import Logo from "./Logo";
// const theme = experimental_extendTheme({});

export default function Header() {
  return (
    <Box
      // bgcolor="background.paper"
      sx={{ backgorund: "rgba(255, 255, 255, 0.99);" }}
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
        <BokehHeader />
        <PageLayout>
          {/* add margins={off} */}
          <Toolbar disableGutters>
            <Logo />
            <MainMenu />
          </Toolbar>
        </PageLayout>
      </AppBar>
    </Box>
  );
}
