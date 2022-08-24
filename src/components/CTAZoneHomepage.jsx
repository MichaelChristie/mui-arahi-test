import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";
import MostTrustedCard from "../components/MostTrustedCard";
import { Link } from "react-router-dom";

export default function CTAZoneHomepage({ belowCTA }) {
  return (
    <>
      <Link to="/quote" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary" size="large" fullWidth>
          Get a quote
        </Button>
      </Link>

      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={2} align="center" direction="row">
          <Grid item xs={6}>
            <Button variant="contained" fullWidth color="grey">
              Pay / renew
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth color="grey">
              Start a claim
            </Button>
          </Grid>
        </Grid>
      </Box>
      {belowCTA}
    </>
  );
}
