import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";

import HeroImage from "../images/nanas-turkey_DTP.jpg";
import HeroImageMobile from "../images/nanas-turkey_MOB.jpg";

export default function HeroImagePhotoNana({ children }) {
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
                xs: "100vh",
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

              backgroundPosition: "top center",
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
