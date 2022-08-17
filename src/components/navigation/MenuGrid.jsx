import * as React from "react";
import { Grid, Box, Paper, Typography, Boxider } from "@mui/material/";
import ProductGridDropdownMenu from "./ProductGridDropdownMenu";
import NavOurProducts from "./NavOurProducts";
import NavPolicy from "./NavPolicy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@mui/material/IconButton";
import {
  faCoffee,
  faUmbrella,
  faBatteryLow,
} from "@fortawesome/pro-duotone-svg-icons";
import { faBatteryL, faBatteryLowow } from "@fortawesome/pro-light-svg-icons";

export default function MenuGrid() {
  return (
    <>
      <Box sx={{ p: 3 }}>
        <Grid container direction="column">
          <Grid item container>
            <Grid item xs={6} md={3} lg={2} align="left" sx={{ mt: 4 }}>
              <Box sx={{ px: 2 }}>
                <Box class="circle-sm size-64">
                  <FontAwesomeIcon icon={faUmbrella} class="inner" />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ p: 2 }}>
                Our Products
              </Typography>

              <NavOurProducts />
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="left" sx={{ mt: 4 }}>
              <Box sx={{ px: 2 }}>
                <Box class="circle-sm size-64">
                  <FontAwesomeIcon icon={faCoffee} class="inner" />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ p: 2 }}>
                Home
              </Typography>
              <NavPolicy />
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="left" sx={{ mt: 4 }}>
              <Box sx={{ px: 2 }}>
                <Box class="circle-sm size-64">
                  <FontAwesomeIcon icon={faBatteryLow} class="inner" />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ p: 2 }}>
                Contents
              </Typography>
              <NavPolicy />
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="left" sx={{ mt: 4 }}>
              <Box sx={{ px: 2 }}>
                <Box class="circle-sm size-64">
                  <FontAwesomeIcon icon={faBatteryLow} class="inner" />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ p: 2 }}>
                Landlord
              </Typography>
              <NavPolicy />
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="left" sx={{ mt: 4 }}>
              <Box sx={{ px: 2 }}>
                <Box class="circle-sm size-64">
                  <FontAwesomeIcon icon={faBatteryLow} class="inner" />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ p: 2 }}>
                Small Business
              </Typography>
              <NavPolicy />
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="left" sx={{ mt: 4 }}>
              <Box sx={{ px: 2 }}>
                <Box class="circle-sm size-64">
                  <FontAwesomeIcon icon={faBatteryLow} class="inner" />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ p: 2 }}>
                Motorcycle
              </Typography>
              <NavPolicy />
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="left" sx={{ mt: 4 }}>
              <Box sx={{ px: 2 }}>
                <Box class="circle-sm size-64">
                  <FontAwesomeIcon icon={faBatteryLow} class="inner" />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ p: 2 }}>
                Caravan
              </Typography>
              <NavPolicy />
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="left" sx={{ mt: 4 }}>
              <Box sx={{ px: 2 }}>
                <Box class="circle-sm size-64">
                  <FontAwesomeIcon icon={faBatteryLow} class="inner" />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ p: 2 }}>
                Classic Car
              </Typography>
              <NavPolicy />
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="left" sx={{ mt: 4 }}>
              <Box sx={{ px: 2 }}>
                <Box class="circle-sm size-64">
                  <FontAwesomeIcon icon={faBatteryLow} class="inner" />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ p: 2 }}>
                Life
              </Typography>
              <NavPolicy />
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="left" sx={{ mt: 4 }}>
              <Box sx={{ px: 2 }}>
                <Box class="circle-sm size-64">
                  <FontAwesomeIcon icon={faBatteryLow} class="inner" />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ p: 2 }}>
                Health
              </Typography>
              <NavPolicy />
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="left" sx={{ mt: 4 }}>
              <Box sx={{ px: 2 }}>
                <Box class="circle-sm size-64">
                  <FontAwesomeIcon icon={faBatteryLow} class="inner" />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ p: 2 }}>
                Travel
              </Typography>
              <NavPolicy />
            </Grid>
            <Grid item xs={6} md={3} lg={2} align="left" sx={{ mt: 4 }}>
              <Box sx={{ px: 2 }}>
                <Box class="circle-sm size-64">
                  <FontAwesomeIcon icon={faBatteryLow} class="inner" />
                </Box>
              </Box>
              <Typography variant="h6" sx={{ p: 2 }}>
                Pets
              </Typography>
              <NavPolicy />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
