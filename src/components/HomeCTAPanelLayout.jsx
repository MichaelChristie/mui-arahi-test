import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";

export default function HomeCTAPanelLayout({ children }) {
  return (
    <Grid container direction="column">
      <Grid item></Grid>
      <Grid item container>
        <Grid item xs={false} lg={1}></Grid>
        <Grid item xs={false} lg={3}>
          <Typography variant="h1" fontSize={24} sx={{ px: 2, pt: 2 }}>
            Reason to Trust #19
          </Typography>
          <Typography variant="h1" fontSize={36} sx={{ px: 2 }}>
            The time a broken oven couldn't spoil Nan's Turkey
          </Typography>
        </Grid>
        <Grid item xs={false} lg={3}></Grid>
        <Grid item xs={12} lg={4}>
          {children}
        </Grid>
        <Grid item xs={false} lg={2}></Grid>
      </Grid>
    </Grid>
  );
}
