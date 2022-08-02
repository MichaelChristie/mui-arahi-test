import * as React from "react";

import { Grid, Paper, Box } from "@mui/material/";
// import theme from "../components/ThemeArahi";
import MainMenu from "../components/MainMenu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../images/aa-insurance-logo-desktop-svg.svg";
import BokehHeader from "./BokehHeader";

// const theme = experimental_extendTheme({});

export default function Header() {
  return (
    <AppBar
      position="fixed"
      color="secondary"
      sx={{ bgcolor: "inherit", backdropFilter: "blur(10px)" }}
    >
      <BokehHeader />
      <Grid item container>
        <Grid item xs={false} lg={1} />
        <Grid item xs={12} lg={10}>
          <Toolbar>
            <Box
              component="img"
              sx={{
                height: 64,
                width: 180,
                maxHeight: { xs: 48, lg: 48, xl: 64 },
                maxWidth: { xs: 120, lg: 120, xl: 180 },
                my: 1,
                transition: "all 0.5s ease",
              }}
              alt="AA Insurance"
              src={Logo}
            />
            <MainMenu />
          </Toolbar>
        </Grid>
        <Grid item xs={false} lg={1} />
      </Grid>
    </AppBar>
  );
}
