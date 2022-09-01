import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";
import HeroMarketingMessage from "./HeroMarketingMessage19";
import PageLayout from "./PageLayout";

export default function PanelRight({ children, leftCol }) {
  return (
    <PageLayout>
      <Grid
        item
        container
        spacing={{
          xs: 0,
          md: 2,
          lg: 4,
        }}
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
    </PageLayout>
  );
}
