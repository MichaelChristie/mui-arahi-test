import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";
// import HeroImage from "../images/policydocus-couple_DTP-homepage.jpg";
// import HeroImage from "https://dummyimage.com/1920x600/cccccc/fff";
// import HeroImageMobile from "../images/policydocus-couple_DTP-homepage_MOB_03.jpg";
// import HeroImage from "../images/dummyimage1920x600.png";
// import HeroImageMobile from "../images/dummyimage880x580.png";
//DENTURES
// import HeroImage from "../images/dentures_DTP.jpg";
// import HeroImageMobile from "../images/dentures_MOB.jpg";
//NANAS TURKEY
import HeroImage from "./images/nanas-turkey_DTP.jpg";
import HeroImageMobile from "./images/nanas-turkey_MOB.jpg";

//JAMIES CAR
// import HeroImage from "../images/jamies-car_DTP.jpg";
// import HeroImageMobile from "../images/jamies-car_MOB.jpg";
// RING
// import HeroImage from "../images/ring_DTP.jpg";
// import HeroImageMobile from "../images/ring_MOB.jpg";

export default function HeroImage({ children }) {
  return (
    <>
      {/* //DELETE THIS FILE */}
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
            // width: "100%",
            backgroundImage: {
              xs: `url(${HeroImageMobile})`,
              md: `url(${HeroImage})`,
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
    </>
  );
}
