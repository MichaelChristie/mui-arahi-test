import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";

export default function HeroMarketingMessage21({ children }) {
  return (
    <>
      <Box
        sx={{
          p: {
            xs: 0,
            lg: 0,
          },
        }}
      >
        <Grid item container>
          <Grid item xs={12} lg={8}>
            <Box sx={{ px: 0, pt: 2 }}>
              <Typography variant="h2" fontSize={24}>
                Reason to Trust #21
              </Typography>
              <Typography variant="h1" fontSize={24}>
                Lorem ipsum dolor, sit amet consectetur.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
