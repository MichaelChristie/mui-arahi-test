import * as React from "react";
import { Grid, Box } from "@mui/material/";

export default function PageLayout({ children }) {
  return (
    <Grid container direction="column">
      <Grid item></Grid>
      <Grid item container>
        <Grid item xs={false} lg={1} />
        <Grid item xs={12} lg={10}>
          {children}
        </Grid>
        <Grid item xs={false} lg={1} />
      </Grid>
    </Grid>
  );
}
