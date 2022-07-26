import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";

export default function HeroMarketingMessage({ children }) {
  return (
    <>
      <Box
        sx={{
          p: {
            xs: 0,
            lg: 1,
          },
        }}
      >
        <Grid item container>
          <Grid item xs={8} lg={8}>
            <Box sx={{ px: 2, pt: 2 }}>
              <Typography variant="h2" fontSize={24}>
                Reason to Trust #20
              </Typography>
              <Typography variant="h1" fontSize={36}>
                The time we got Sam's dentures, and smile, back on holiday
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
