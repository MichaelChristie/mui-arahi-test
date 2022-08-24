import * as React from "react";

import { Grid, Paper, Box, Typography } from "@mui/material/";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BokehHeader from "./BokehHeader";
import PageLayout from "./PageLayout";
import Logo from "./Logo";
import MainMenuQuote from "./MainMenuQuote";
import LinearProgress from "@mui/material/LinearProgress";
import QuoteProgress from "./ProgressIndeterminate";

export default function HeaderInnerQuote({ progress }) {
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
              mt: -1,
            }}
          >
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
