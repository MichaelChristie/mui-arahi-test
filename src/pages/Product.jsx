import * as React from "react";
import { Grid, Box, Button, Paper, Typography } from "@mui/material/";
import { useNavigate, useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import BokehHero from "../components/BokehHero";
import ProductAccordion from "../components/ProductAccordion";
import MostTrustedCard from "../components/MostTrustedCard";
import HeroImage from "../images/CONTENTS_DTP_03.jpg";
import PageLayout from "../components/PageLayout";
import Panel from "../components/PanelBottomLeft";
import Quicklinks from "../components/navigation/Quicklinks";

export default function Product() {
  let { producttype } = useParams();

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
              height: "600px",
              maxWidth: "1920px",
              margin: "0 auto",
              borderRadius: "4px",
              // width: "100%",
              backgroundImage: `url(${HeroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <Panel sx={{ zIndex: 11111, position: "absolute" }}>
              <Typography variant="h2" fontSize={24}>
                Motukā inihua
              </Typography>
              <Typography variant="h1">Car Insurance</Typography>
              <Typography variant="p">
                {producttype} Insurance Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tempora vel, reprehenderit, ducimus laborum
                laboriosam cumque voluptatem consectetur provident corrupti unde
                pariatur, incidunt cupiditate ullam aspernatur voluptatibus
                distinctio similique doloremque debitis.
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                <Grid container spacing={2} align="center" direction="row">
                  <Grid item xs={6}>
                    <Button variant="contained" fullWidth color="primary">
                      Get a quote
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Quicklinks />
                  </Grid>
                </Grid>
              </Box>
              <MostTrustedCard />
            </Panel>
          </Box>
        </Grid>

        <PageLayout>
          <Box></Box>
          <ProductAccordion />
        </PageLayout>
      </Grid>
    </>
  );
}
