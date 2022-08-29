import * as React from "react";
import {
  Grid,
  Box,
  Button,
  Paper,
  Typography,
  Divider,
  Alert,
  AlertTitle,
} from "@mui/material/";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faPhone,
  faArrowRight,
  faCar,
} from "@fortawesome/pro-light-svg-icons";

import HeroImageSQ from "../../images/placeholder_SQ@2x.png";

export default function NavMegaMenuCarAndVehicle() {
  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{ width: "800px", background: "transparent" }}
      >
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  textAlign="left"
                  href="/quote"
                >
                  Get a quote
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Button
                  sx={{ justifyContent: "flex-start" }}
                  fullWidth
                  startIcon={<FontAwesomeIcon icon={faArrowRight} />}
                  variant="text"
                  size="large"
                  textAlign="left"
                >
                  Compare all Car insurance
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ justifyContent: "flex-start" }}
                fullWidth
                startIcon={<FontAwesomeIcon icon={faCar} />}
                variant="text"
                size="large"
                textAlign="left"
              >
                Comprehensive
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ justifyContent: "flex-start" }}
                fullWidth
                startIcon={<FontAwesomeIcon icon={faCar} />}
                variant="text"
                size="large"
                textAlign="left"
              >
                Third Party Fire &amp; Theft
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ justifyContent: "flex-start" }}
                fullWidth
                startIcon={<FontAwesomeIcon icon={faCar} />}
                variant="text"
                size="large"
                textAlign="left"
              >
                Third Party
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              height: "320px",
              backgroundImage: {
                xs: `url(${HeroImageSQ})`,
              },
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundPosition: "center center",
            }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
}
