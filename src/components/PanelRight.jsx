import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";
import HeroMarketingMessage from "./HeroMarketingMessage19";
import PageLayout from "./PageLayout";
import PageLayoutBreakout from "./PageLayoutBreakout";

export default function PanelRight({ children, leftCol }) {
  return (
    <PageLayoutBreakout>
      <Grid
        item
        container
        // className="showMe"
        spacing={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
      >
        <Grid
          item
          xs={12}
          md={6}
          // pr={2}
          sx={{
            order: {
              xs: 1,
              lg: 2,
            },
            zIndex: 1,
          }}
        >
          {leftCol}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="showMe"
          sx={{
            order: {
              xs: 1,
              lg: 2,
            },
            zIndex: 1,
          }}
        >
          {children}
        </Grid>
      </Grid>
    </PageLayoutBreakout>
  );
}
