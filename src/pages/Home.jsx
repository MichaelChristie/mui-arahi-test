import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";
import PageLayout from "../components/PageLayout";
import Content from "../components/Content";
import ProductGrid from "../components/ProductGrid";
import BasicCard from "../components/Card";
import HeaderBrochure from "../components/HeaderBrochure";
import { Link } from "react-router-dom";
import HeroHomepage from "../components/HeroHomepage";

export default function Home() {
  return (
    <>
      <HeaderBrochure />
      <Grid container direction="column">
        <HeroHomepage />

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
