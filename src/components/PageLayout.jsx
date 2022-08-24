import * as React from "react";
import { Grid, Box } from "@mui/material/";

export default function PageLayout({ children }) {
  return (
    <Grid
      container
      direction="column"
      sx={{
        position: "relative",
        zIndex: 1,
      }}
    >
      <Grid item></Grid>
      <Grid item container>
        <Grid item xs={false} xl={1} />
        <Grid item xs={12} xl={10}>
          {children}
        </Grid>
        <Grid item xs={false} xl={1} />
      </Grid>
    </Grid>
  );
}
