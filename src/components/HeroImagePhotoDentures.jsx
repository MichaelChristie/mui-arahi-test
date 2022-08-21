import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";

//DENTURES
import HeroImage from "../images/dentures_DTP.jpg";
import HeroImageMobile from "../images/dentures_MOB.jpg";

import PageLayout from "./PageLayout";
// import PanelTopRight from "./PanelTop";

export default function HeroImagePhotoDentures({ children }) {
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
