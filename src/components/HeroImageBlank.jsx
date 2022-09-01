import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";

import HeroImage from "../images/home-contents-illustration.png";
import HeroImageMobile from "../images/home-contents-illustration.png";

import PageLayout from "../components/PageLayout";
// import PanelTopRight from "./PanelTop";
import Content from "../components/Content";
import MostTrustedCard from "../components/MostTrustedCard";
import ProductGrid from "../components/ProductGrid";
import BasicCard from "../components/Card";
import HeaderBrochure from "../components/HeaderBrochure";
import { Link } from "react-router-dom";
import CTAZoneHomepage from "./CTAZoneHomepage";
import HeroInnerContents from "./HeroInnerContents";
import HeroSwitcher from "./HeroSwitcher";

export default function HeroImageBlank({ children }) {
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
              //   backgroundImage: {
              //     xs: "`url(${HeroImageMobile})`",
              //     lg: `url(${HeroImage})`,
              //   },

              backgroundSize: {
                xs: "contain",
                lg: "cover",
              },
              backgroundRepeat: "no-repeat",

              backgroundPosition: {
                xs: "top center",
                lg: "bottom center",
              },
              //   backgroundColor: "#ebf4fb",
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
