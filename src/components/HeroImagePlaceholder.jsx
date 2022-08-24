import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";
import HeroImage from "../images/placeholder1920x600@2x.png";
import HeroImageMobile from "../images/dummyimage880x580.png";

export default function HeroImagePlaceholder({ children }) {
  return (
    <>
      {/* <Box sx={{ background: "transparent", zIndex: 1 }}>
        <HeroSwitcher />
      </Box> */}

      <Grid container direction="column">
        <Grid item>
          <Box
            sx={{
              height: {
                xs: "90vh",
                lg: "600px",
              },
              maxWidth: "1920px",
              margin: "0 auto",
              borderRadius: "4px",
              backgroundImage: {
                xs: `url(${HeroImageMobile})`,
                lg: `url(${HeroImage})`,
              },

              backgroundSize: {
                xs: "contain",
                lg: "cover",
              },
              backgroundRepeat: "no-repeat",

              backgroundPosition: {
                xs: "bottom center",
                lg: "bottom center",
              },
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
