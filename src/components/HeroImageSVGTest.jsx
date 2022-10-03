import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";

// import HeroImageXS from "../images/nanas-turkey_XS.jpg";
// import HeroImageSM from "../images/nanas-turkey_SM.jpg";
// import HeroImageMD from "../images/nanas-turkey_MD.jpg";
// import HeroImageLG from "../images/nanas-turkey_LG.jpg";

import HeroImageXS from "../images/tool-set.svg";
import HeroImageSM from "../images/tool-set.svg";
import HeroImageMD from "../images/tool-set.svg";
import HeroImageLG from "../images/tool-set.svg";

export default function HeroImageSVGTest({ children }) {
  return (
    <>
      <Box sx={{ background: "rgba(50,120,150,0.25)", zIndex: 1 }}>
        <Grid container direction="column">
          <Grid item>
            <Box
              sx={{
                height: {
                  xs: "100vh",
                  sm: "900px",
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
                  xs: "cover",
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
      </Box>
    </>
  );
}
