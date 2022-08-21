import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";
import HeroMarketingMessage from "./HeroMarketingMessage";
import PageLayout from "./PageLayout";

export default function PanelLeft({ children, rightCol }) {
  return (
    <PageLayout>
      <Grid item container>
        <Grid item xs={12} lg={6}>
          {children}
        </Grid>
        <Grid item xs={12} lg={6}>
          {/* <HeroMarketingMessage /> */}
          {rightCol}
        </Grid>
      </Grid>
    </PageLayout>
  );
}
