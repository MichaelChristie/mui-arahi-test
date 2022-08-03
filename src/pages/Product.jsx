import * as React from "react";
import { Grid, Box, Paper } from "@mui/material/";
import { useNavigate, useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Content from "../components/Content";
import Bokeh from "../components/Bokeh";
// import HeroImage from "../images/Wear-and-tear@768w.png";
import HeroImage from "../images/comprehensive-car-dtp.jpg";

export default function Product() {
  let { producttype } = useParams();

  return (
    <Grid container direction="column">
      <Grid item>
        <Bokeh />
        <Box
          sx={{
            height: "600px",
            // width: "100%",
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></Box>
      </Grid>
      <Grid item container>
        <Grid item xs={false} lg={1} />
        <Grid item xs={12} lg={10}>
          <Box sx={{ pt: 5 }}>
            <h1>Product page: {producttype}</h1>
            <Content />
          </Box>
        </Grid>
        <Grid item xs={false} lg={1} />
      </Grid>
    </Grid>
  );
}
