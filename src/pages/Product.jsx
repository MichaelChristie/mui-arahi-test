import * as React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material/";
import { useNavigate, useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Bokeh from "../components/Bokeh";
import SimpleAccordion from "../components/Accordion";

// import HeroImage from "../images/Wear-and-tear@768w.png";
// import HeroImage from "../images/comprehensive-car-dtp.jpg";
import HeroImage from "../images/CONTENTS_DTP_03.jpg";
import PageLayout from "../components/PageLayout";
import Panel from "../components/Panel";
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
        <Bokeh />
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
              <Typography variant="h1">{producttype} Insurance</Typography>
            </Panel>
          </Box>
        </Grid>

        <PageLayout>
          <Box></Box>
          <SimpleAccordion />
        </PageLayout>
      </Grid>
    </>
  );
}
