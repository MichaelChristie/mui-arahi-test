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
              <Typography variant="h1" fontSize={24}>
                Reason to Trust #20
              </Typography>
              <Typography variant="h1" fontSize={36}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Typography>
              <Typography variant="p">
                Illo quod perferendis distinctio doloribus provident possimus,
                ad sunt excepturi suscipit unde libero voluptas? Sunt tempore
                commodi doloribus non eum, numquam exercitationem!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
