import * as React from "react";
import { Grid, Box, Paper, Typography, Divider } from "@mui/material/";
import ClaimMenu from "./navigation/ClaimMenu";
import ProductGridDropdownMenu from "./navigation/ProductGridDropdownMenu";

export default function ProductGrid() {
  return (
    <>
      <Box sx={{ p: 3 }}>
        {/* <Typography variant="h1">Product Grid</Typography>
        <Divider />
        <Typography variant="overline">Typography</Typography> */}

        <Grid container direction="column">
          <Grid item container>
            <Grid item xs={6} md={3} lg={2} align="center" sx={{ mt: 4 }}>
              <div className="icon circle-sm size-72 aai-icon-car"></div>
              <ProductGridDropdownMenu>Car</ProductGridDropdownMenu>
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="center" sx={{ mt: 4 }}>
              <div className="icon circle-sm size-72 aai-icon-home"></div>
              <ProductGridDropdownMenu>Home</ProductGridDropdownMenu>
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="center" sx={{ mt: 4 }}>
              <div className="icon circle-sm size-72 aai-icon-contents"></div>
              <ProductGridDropdownMenu>Contents</ProductGridDropdownMenu>
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="center" sx={{ mt: 4 }}>
              <div className="icon circle-sm size-72 aai-icon-landlord"></div>
              <ProductGridDropdownMenu>Landlord</ProductGridDropdownMenu>
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="center" sx={{ mt: 4 }}>
              <div className="icon circle-sm size-72 aai-icon-small-business"></div>
              <ProductGridDropdownMenu>Small Business</ProductGridDropdownMenu>
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="center" sx={{ mt: 4 }}>
              <div className="icon circle-sm size-72 aai-icon-motorcycle"></div>
              <ProductGridDropdownMenu>Motorcycle</ProductGridDropdownMenu>
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="center" sx={{ mt: 4 }}>
              <div className="icon circle-sm size-72 aai-icon-caravan"></div>
              <ProductGridDropdownMenu>Caravan</ProductGridDropdownMenu>
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="center" sx={{ mt: 4 }}>
              <div className="icon circle-sm size-72 aai-icon-driver"></div>
              <ProductGridDropdownMenu>Classic Car</ProductGridDropdownMenu>
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="center" sx={{ mt: 4 }}>
              <div className="icon circle-sm size-72 aai-icon-life"></div>
              <ProductGridDropdownMenu>Life</ProductGridDropdownMenu>
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="center" sx={{ mt: 4 }}>
              <div className="icon circle-sm size-72 aai-icon-health"></div>
              <ProductGridDropdownMenu>Health</ProductGridDropdownMenu>
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="center" sx={{ mt: 4 }}>
              <div className="icon circle-sm size-72 aai-icon-travel"></div>
              <ProductGridDropdownMenu>Travel</ProductGridDropdownMenu>
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="center" sx={{ mt: 4 }}>
              <div className="icon circle-sm size-72 aai-icon-pets"></div>
              <ProductGridDropdownMenu>Pets</ProductGridDropdownMenu>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
