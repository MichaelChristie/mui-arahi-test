import * as React from "react";
import { Grid, Box } from "@mui/material/";

export default function PanelLayout({ children }) {
  return (
    // <Grid container direction="column">
    // </Grid>
    // <Grid item></Grid>
    <Grid container columns={6}>
      {/* <Grid item xs={false} lg={1} /> */}
      <Grid item xs={6} lg={5}>
        {children}
      </Grid>
      <Grid item xs={false} lg={1} />
    </Grid>
  );
}
