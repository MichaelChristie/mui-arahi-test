import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";
import HeroMarketingMessage from "./HeroMarketingMessage19";
import PageLayout from "./PageLayout";
import PageLayoutBreakout from "./PageLayoutBreakout";

export default function PanelHorizonatalCentered({ children }) {
  return (
    <PageLayoutBreakout>
      <Grid item container>
        <Grid item xs={false} md={2}></Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            zIndex: 1,
          }}
        >
          {children}
        </Grid>
        <Grid item xs={false} md={2}></Grid>
      </Grid>
    </PageLayoutBreakout>
  );
}
