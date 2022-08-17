import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";
// import HeroImage from "../images/policydocus-couple_DTP-homepage.jpg";
// import HeroImage from "https://dummyimage.com/1920x600/cccccc/fff";
// import HeroImageMobile from "../images/policydocus-couple_DTP-homepage_MOB_03.jpg";
import HeroImage from "../images/dummyimage1920x600.png";
import HeroImageMobile from "../images/dummyimage880x580.png";
//DENTURES
// import HeroImage from "../images/dentures_DTP.jpg";
// import HeroImageMobile from "../images/dentures_MOB.jpg";
//NANAS TURKEY
// import HeroImage from "../images/nanas-turkey_DTP.jpg";
// import HeroImageMobile from "../images/nanas-turkey_MOB.jpg";
//JAMIES CAR
// import HeroImage from "../images/jamies-car_DTP.jpg";
// import HeroImageMobile from "../images/jamies-car_MOB.jpg";
// RING
// import HeroImage from "../images/ring_DTP.jpg";
// import HeroImageMobile from "../images/ring_MOB.jpg";

import PageLayout from "../components/PageLayout";
import PanelTopRight from "../components/PanelTopRight";
import Content from "../components/Content";
import MostTrustedCard from "../components/MostTrustedCard";
import ProductGrid from "../components/ProductGrid";
import BasicCard from "../components/Card";
import HeaderBrochure from "../components/HeaderBrochure";
import { Link } from "react-router-dom";
import CTAZoneHomepage from "./CTAZoneHomepage";
import HeroInnerContents from "./HeroInnerContents";

export default function HeroHomepage() {
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
            <HeroInnerContents />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
