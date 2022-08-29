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
  faHome,
  faKey,
  faLamp,
  faMoneyBill,
} from "@fortawesome/pro-light-svg-icons";

import HeroImageSQ from "../../images/placeholder_SQ@2x.png";

export default function NavMegaMenuHomeAndContents() {
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
                  sx={{ justifyContent: "flex-start" }}
                  fullWidth
                  startIcon={<FontAwesomeIcon icon={faHome} />}
                  variant="text"
                  size="large"
                  textAlign="left"
                >
                  Home Insurance
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box>
                <Button
                  sx={{ justifyContent: "flex-start" }}
                  fullWidth
                  startIcon={<FontAwesomeIcon icon={faLamp} />}
                  variant="text"
                  size="large"
                  textAlign="left"
                >
                  Compare Contents Insurance
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ justifyContent: "flex-start" }}
                fullWidth
                startIcon={<FontAwesomeIcon icon={faLamp} />}
                variant="text"
                size="large"
                textAlign="left"
              >
                Home &amp; Contents
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ justifyContent: "flex-start" }}
                fullWidth
                startIcon={<FontAwesomeIcon icon={faKey} />}
                variant="text"
                size="large"
                textAlign="left"
              >
                Landlord Insurance
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ justifyContent: "flex-start" }}
                fullWidth
                startIcon={<FontAwesomeIcon icon={faMoneyBill} />}
                variant="text"
                size="large"
                textAlign="left"
              >
                Renters Insurance
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
