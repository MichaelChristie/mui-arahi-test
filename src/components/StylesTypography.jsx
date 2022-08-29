import * as React from "react";
import { Typography, Divider, Grid } from "@mui/material/";

export default function StylesTypography() {
  return (
    <>
      <Grid item container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="overline">Typography</Typography>
          <Divider />
          <Typography variant="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            quae labore, aspernatur in libero quo iure, eos neque adipisci illum
            ipsam consequuntur quisquam laborum tempore quam a sint aperiam
            enim!
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="body2">body2</Typography>
          <Typography variant="body2">body1</Typography>
          <Typography variant="caption">caption</Typography>
          <Typography variant="subtitle1">subtitle1</Typography>
          <Typography variant="subtitle2">subtitle2</Typography>
          <Typography variant="overline">overline</Typography>
          <Typography variant="inherit">inherit</Typography>
        </Grid>
      </Grid>
    </>
  );
}
