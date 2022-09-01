import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";

//DENTURES
import HeroImageXS from "../images/dentures_XS@2x.jpg";
import HeroImageSM from "../images/dentures_SM@2x.jpg";
import HeroImageMD from "../images/dentures_MD@2x.jpg";
import HeroImageLG from "../images/dentures_LG@2x.jpg";

import PageLayout from "./PageLayout";
// import PanelTopRight from "./PanelTop";

export default function HeroImagePhotoDentures({ children }) {
  return (
    <>
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
                xs: `url(${HeroImageXS})`,
                sm: `url(${HeroImageSM})`,
                md: `url(${HeroImageMD})`,
                lg: `url(${HeroImageLG})`,
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
