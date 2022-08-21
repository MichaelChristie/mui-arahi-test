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
            <Typography variant="h1" fontSize={24} sx={{ px: 2, pt: 2 }}>
              Reason to Trust #19
            </Typography>
            <Typography variant="h1" fontSize={36} sx={{ px: 2 }}>
              The time a broken oven couldn't spoil Nan's Turkey
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
