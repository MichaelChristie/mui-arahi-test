import * as React from "react";
import { Grid, Box, Paper, Typography, Divider } from "@mui/material/";
import ClaimMenu from "./navigation/ClaimMenu";
import { styled } from "@mui/material/styles";
import ProductGridDropdownMenu from "./navigation/ProductGridDropdownMenu";

export default function ProductGrid() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 2 }}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          align="center"
          // sx={{ mx: 0 }}
          className="showMe1"
        >
          <div className="icon circle-sm size-72 aai-icon-car"></div>
          <ProductGridDropdownMenu>Car</ProductGridDropdownMenu>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          align="center"
          // sx={{ mx: 0 }}
          className="showMe1"
        >
          <div className="icon circle-sm size-72 aai-icon-home"></div>
          <ProductGridDropdownMenu>Home</ProductGridDropdownMenu>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          align="center"
          // sx={{ mx: 0 }}
          className="showMe1"
        >
          <div className="icon circle-sm size-72 aai-icon-contents"></div>
          <ProductGridDropdownMenu>Contents</ProductGridDropdownMenu>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          align="center"
          // sx={{ mx: 0 }}
          className="showMe1"
        >
          <div className="icon circle-sm size-72 aai-icon-landlord"></div>
          <ProductGridDropdownMenu>Landlord</ProductGridDropdownMenu>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          align="center"
          // sx={{ mx: 0 }}
          className="showMe1"
        >
          <div className="icon circle-sm size-72 aai-icon-small-business"></div>
          <ProductGridDropdownMenu>Small Business</ProductGridDropdownMenu>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          align="center"
          // sx={{ mx: 0 }}
          className="showMe1"
        >
          <div className="icon circle-sm size-72 aai-icon-motorcycle"></div>
          <ProductGridDropdownMenu>Motorcycle</ProductGridDropdownMenu>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          align="center"
          // sx={{ mx: 0 }}
          className="showMe1"
        >
          <div className="icon circle-sm size-72 aai-icon-caravan"></div>
          <ProductGridDropdownMenu>Caravan</ProductGridDropdownMenu>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          align="center"
          // sx={{ mx: 0 }}
          className="showMe1"
        >
          <div className="icon circle-sm size-72 aai-icon-driver"></div>
          <ProductGridDropdownMenu>Classic Car</ProductGridDropdownMenu>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          align="center"
          // sx={{ mx: 0 }}
          className="showMe1"
        >
          <div className="icon circle-sm size-72 aai-icon-life"></div>
          <ProductGridDropdownMenu>Life</ProductGridDropdownMenu>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          align="center"
          // sx={{ mx: 0 }}
          className="showMe1"
        >
          <div className="icon circle-sm size-72 aai-icon-health"></div>
          <ProductGridDropdownMenu>Health</ProductGridDropdownMenu>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          align="center"
          // sx={{ mx: 0 }}
          className="showMe1"
        >
          <div className="icon circle-sm size-72 aai-icon-travel"></div>
          <ProductGridDropdownMenu>Travel</ProductGridDropdownMenu>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          lg={2}
          align="center"
          // sx={{ mx: 0 }}
          className="showMe1"
        >
          <div className="icon circle-sm size-72 aai-icon-pets"></div>
          <ProductGridDropdownMenu>Pets</ProductGridDropdownMenu>
        </Grid>
      </Grid>
    </>
  );
}
