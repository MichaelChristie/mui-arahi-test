import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";

import HeroImageXS from "../images/holiday_XS@2x.jpg";
import HeroImageSM from "../images/holiday_SM@2x.jpg";
import HeroImageMD from "../images/holiday_MD@2x.jpg";
import HeroImageLG from "../images/holiday_LG@2x.jpg";

export default function HeroImagePhotoHoliday({ children }) {
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
                sm: "800px",
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
                md: "cover",
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
