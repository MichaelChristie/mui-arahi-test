import * as React from "react";
import { Grid, Box } from "@mui/material/";

export default function HomeCTAPanelLayout({ children }) {
  return (
    <Grid container direction="column">
      <Grid item></Grid>
      <Grid item container>
        <Grid item xs={false} lg={6}></Grid>
        <Grid item xs={12} lg={4}>
          {children}
        </Grid>
        <Grid item xs={false} lg={2}></Grid>
      </Grid>
    </Grid>
  );
}
