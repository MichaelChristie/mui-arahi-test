import * as React from "react";
import { Grid, Box, Button, Paper, Typography } from "@mui/material/";
import { useNavigate, useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import BokehHero from "../components/BokehHero";
import ProductAccordion from "../components/ProductAccordion";
import MostTrustedCard from "../components/MostTrustedCard";
import HeroImage from "../images/CONTENTS_DTP_03.jpg";
import HeroImageMobile from "../images/CONTENTS_DTP_03_MOB_03.jpg";

import PageLayout from "../components/PageLayout";
import Panel from "../components/PanelBottomLeft";
import Quicklinks from "../components/navigation/Quicklinks";
import HeaderBrochure from "../components/HeaderBrochure";

export default function ProductPanelCarInsurance() {
  let { producttype } = useParams();

  return (
    <>
      <Panel sx={{ zIndex: 11111, position: "relative" }}>
        <Typography variant="h2" fontSize={16}>
          Motukā inihua
        </Typography>
        <Typography variant="h1">Car Insurance</Typography>
        <Typography variant="p">
          {producttype} Insurance Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora vel, reprehenderit, ducimus laborum
          laboriosam cumque voluptatem consectetur provident corrupti.
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Grid container spacing={3} align="center" direction="row">
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
    </>
  );
}
