import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";
import HeroMarketingMessage from "./HeroMarketingMessage19";
import PageLayout from "./PageLayout";

export default function PanelRight({ children, leftCol }) {
  return (
    <PageLayout>
      <Grid item container>
        <Grid item xs={12} lg={6} sx={{ zIndex: 1 }}>
          {leftCol}
        </Grid>
        <Grid item xs={12} lg={6}>
          {children}
        </Grid>
      </Grid>
    </PageLayout>
  );
}
