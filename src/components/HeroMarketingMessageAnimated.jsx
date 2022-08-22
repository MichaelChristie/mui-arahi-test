import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";
import HeroAnimatedBalloons from "./HeroAnimatedBaloons";
import { Link } from "react-router-dom";

import { InputAdornment, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import Visibility from "@mui/icons-material/Visibility";
import {
  faTimes,
  faSearch,
  faMagnifyingGlass,
} from "@fortawesome/pro-light-svg-icons";

import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Button from "@mui/material/Button";

export default function HeroMarketingMessageAnimated({ children }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "flex-start",
          alignContent: "stretch",
          alignItems: "flex-start",
          // background: "rgba(150,120,0,0.5)",
          minHeight: {
            xs: "100vh",
            lg: "600px",
          },
        }}
      >
        <Box
          sx={{
            order: {
              xs: 2,
              lg: 1,
            },
            flex: {
              xs: "1 0 auto",
              lg: "1 0 auto",
            },
            alignSelf: "stretch",
            // background: "rgba(50,120,0,0.5)",
            zIndex: 1,
          }}
        >
          <HeroAnimatedBalloons />
        </Box>
        <Box
          sx={{
            order: {
              xs: 1,
              lg: 2,
            },
            pb: {
              xs: 1,
              lg: 10,
            },
            flex: {
              xs: "0 0 auto",
              lg: "0 0 auto",
            },

            alignSelf: "stretch",
            // background: "rgba(255,50,200,0.50)",
            zIndex: 1,
          }}
          className="marketingSpiel"
        >
          <Grid item container>
            <Grid item xs={12} lg={10}>
              <Box sx={{ px: 2, pt: 2 }}>
                <Typography variant="h1" fontSize={36}>
                  Grab a $50 Prezzy card from NZ's Most Trusted General Insurer
                </Typography>
                <Typography variant="p">
                  Get your with every new Home, Car, Contents or Small Business
                  policy. Offer ends 11 August 2022.
                  <Link to="/">Terms and Conditions</Link>
                </Typography>
                <Box sx={{ mb: 2 }}></Box>
                <Grid item container>
                  <Grid item xs={3}>
                    <FormControl sx={{}} variant="filled">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Use Promo code:
                      </InputLabel>
                      <FilledInput
                        id="promo code"
                        type="text"
                        label="efojerfoijer"
                        value="TRUST"
                        color="secondary"
                        sx={{ bgcolor: "background.paper", mr: 1 }}
                        endAdornment={
                          <InputAdornment position="end"></InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      aria-label="toggle password visibility"
                      edge="end"
                      variant="contained"
                      color="grey"
                      size="large"
                      sx={{ height: "100%" }}
                    >
                      Get offer
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
