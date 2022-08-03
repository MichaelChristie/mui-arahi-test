import * as React from "react";
import { Grid, Box } from "@mui/material/";

export default function Home() {
  return (
    <Grid container direction="column">
      <Grid item></Grid>
      <Grid item container>
        <Grid item xs={false} lg={1} />
        <Grid item xs={12} lg={10}>
          <h1>Home </h1>
        </Grid>
        <Grid item xs={false} lg={1} />
      </Grid>
    </Grid>
  );
}
