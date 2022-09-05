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
          <Grid item xs={4} lg={8}>
            <Box sx={{ px: 2, pt: 2 }}>
              <Typography variant="h2" fontSize={{ xs: 12, lg: 24 }}>
                Reason to Trust #19
              </Typography>
              <Typography variant="h1" fontSize={{ xs: 18, lg: 36 }}>
                The time a broken oven couldn't spoil Nan's Turkey
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
