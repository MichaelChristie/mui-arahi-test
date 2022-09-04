import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";
import HeroMarketingMessage from "./HeroMarketingMessage19";
import PageLayout from "./PageLayout";
import PageLayoutBreakout from "./PageLayoutBreakout";

export default function PanelLeft({ children, rightCol }) {
  return (
    <PageLayoutBreakout>
      <Grid item container spacing={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            order: {
              xs: 2,
              sm: 2,
              md: 1,
              lg: 1,
            },
            zIndex: 1,
          }}
          className="showMe"
        >
          {children}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            order: {
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
            },
            zIndex: 1,
          }}
        >
          {rightCol}
        </Grid>
      </Grid>
    </PageLayoutBreakout>
  );
}
