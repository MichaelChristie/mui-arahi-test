import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material/";
import CTAZoneHomepage from "./CTAZoneHomepage";
import MostTrustedCard from "../components/MostTrustedCard";
import { Link } from "react-router-dom";

export default function PanelCenteredCTA({ children, optionalContent }) {
  return (
    <>
      <Box
        sx={{
          borderRadius: {
            xs: "32px 32px 32px 32px",
            lg: "32px 32px 32px 32px",
          },

          pt: {
            xs: 4,
            md: 4,
            lg: 6,
          },
          px: {
            xs: 4,
            md: 4,
            lg: 6,
          },
          pb: {
            xs: 4,
            md: 0,
            lg: 6,
          },
          // mx: {
          //   xs: 0,
          //   md: 3,
          //   lg: 6,
          //   xl: 12,
          // },
          //   bgcolor: "background.paper",
        }}
      >
        <Typography variant="h1" align="center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Typography>

        <>
          <Box sx={{ marginTop: 2 }}>
            <Grid container spacing={2} align="center" direction="row">
              <Grid item xs={false} md={1} lg={2} />
              <Grid item xs={6} md={4} lg={4}>
                <Button variant="contained" fullWidth color="grey">
                  Find out more
                </Button>
              </Grid>
              <Grid item xs={6} md={4} lg={4}>
                <Link to="/quote" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Enter now
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={false} md={1} lg={2} />
              <Grid item xs={12}>
                <Box sx={{ height: "240px" }}></Box>
              </Grid>
            </Grid>
          </Box>
        </>
        {/* <CTAZoneHomepage belowCTA={<MostTrustedCard />} /> */}
      </Box>
    </>
  );
}
