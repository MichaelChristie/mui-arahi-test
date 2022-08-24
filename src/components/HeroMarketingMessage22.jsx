import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";
import AddPromoCode from "./AddPromoCode";

export default function HeroMarketingMessage22({ children }) {
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
          <Grid item xs={8} lg={12}>
            <Box sx={{ px: 2, pt: 2 }}>
              <Typography variant="h1" fontSize={36}>
                Grab a $50 Prezzy card from NZ's Most Trusted General Insurer
              </Typography>
              <Typography variant="p">
                Get your with every new Home, Car, Contents or Small Business
                policy. Offer ends 11 August 2022.Terms and Conditions
              </Typography>
              <Box
                sx={{
                  p: {
                    xs: 0,
                    lg: 1,
                  },
                }}
              />

              <AddPromoCode />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
