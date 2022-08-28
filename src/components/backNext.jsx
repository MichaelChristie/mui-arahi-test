import * as React from "react";
import { Button, Box, Grid } from "@mui/material";

export default function BackNext() {
  return (
    <>
      <Box sx={{ display: "flex", marginTop: 3 }}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={6} sx={{}}>
            <Button fullWidth variant="text" href="/">
              Back
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              href="/quote2"
              variant="contained"
              fullWidth
              color="primary"
              size="large"
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
