import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";
// import HeroImage from "../images/policydocus-couple_DTP-homepage.jpg";
// import HeroImage from "https://dummyimage.com/1920x600/cccccc/fff";
import HeroImage from "../images/dummyimage1920x600.png";
// import HeroImageMobile from "../images/policydocus-couple_DTP-homepage_MOB_03.jpg";
import HeroImageMobile from "../images/dummyimage880x580.png";

import PageLayout from "../components/PageLayout";
import PanelTopRight from "../components/PanelTopRight";
import Content from "../components/Content";
import MostTrustedCard from "../components/MostTrustedCard";

import { useNavigate, useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import BokehHero from "../components/BokehHero";
import ProductGrid from "../components/ProductGrid";
import BasicCard from "../components/Card";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 0,
          height: 0,
          background: "#FF0000",
          zIndex: 1,
        }}
      >
        <BokehHero />
      </Box>

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
              // width: "100%",
              backgroundImage: {
                xs: `url(${HeroImageMobile})`,
                lg: `url(${HeroImage})`,
              },

              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <PanelTopRight sx={{ zIndex: 1, position: "absolute" }}>
              {/* <Typography variant="h2" fontSize={24}>
                Nau mai, Haere Mai
              </Typography> */}
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Get a quote
              </Button>

              <Box sx={{ marginTop: 2 }}>
                <Grid container spacing={2} align="center" direction="row">
                  <Grid item xs={6}>
                    <Button variant="contained" fullWidth color="grey">
                      Pay / renew
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" fullWidth color="grey">
                      Start a claim
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              <MostTrustedCard />
            </PanelTopRight>
          </Box>
        </Grid>

        <PageLayout>
          <Box sx={{ mt: 10 }} />
          <ProductGrid />
          <Box sx={{ mt: 12 }} />
          <Box sx={{ p: 3 }}>
            <BasicCard />
          </Box>

          <Content />

          <Box>Home</Box>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            This is a button
          </Button>
          <Button variant="contained" color="grey">
            This is another button
          </Button>
        </PageLayout>
      </Grid>
    </>
  );
}
