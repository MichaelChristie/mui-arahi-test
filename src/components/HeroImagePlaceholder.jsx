import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";

// import HeroImageXS from "../images/nanas-turkey_XS.jpg";
// import HeroImageSM from "../images/nanas-turkey_SM.jpg";
// import HeroImageMD from "../images/nanas-turkey_MD.jpg";
// import HeroImageLG from "../images/nanas-turkey_LG.jpg";

import HeroImageXS from "../images/placeholder_XS@2x.png";
import HeroImageSM from "../images/placeholder_SM@2x.png";
import HeroImageMD from "../images/placeholder_MD@2x.png";
import HeroImageLG from "../images/placeholder_LG@2x.png";

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
                xs: "100vh",
                sm: "90vh",
                md: "600px",
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
                sm: "cover",
                md: "cover",
                lg: "cover",
              },
              backgroundRepeat: "no-repeat",

              backgroundPosition: {
                xs: "top center",
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
