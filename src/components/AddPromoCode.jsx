import * as React from "react";
import { Grid } from "@mui/material/";
import { InputAdornment, TextField } from "@mui/material";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PlaceholderImage from "../images/TBNZ2022_Winner_GeneralInsurance_2011-2022.png";

export default function AddPromoCode() {
  return (
    <>
      <Card
        variant=""
        sx={{ display: "flex", mt: 1, p: 1, backgroundColor: "transparent" }}
      >
        <CardMedia
          component="img"
          sx={{ width: 108 }}
          image={PlaceholderImage}
          alt="Placeholder"
        />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            {/* <Typography component="div" variant="h6">
              Card Headline
            </Typography> */}
            {/* <Typography variant="body" color="text.secondary" component="div">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam est
              aspernatur velit ipsum ex.
            </Typography> */}
            <Box sx={{ mb: 1 }} />
            <Grid item container>
              <Grid item xs={6}>
                <FormControl sx={{}} variant="filled">
                  <InputLabel htmlFor="promo code">Use Promo code:</InputLabel>
                  <FilledInput
                    id="promo code"
                    type="text"
                    label="Use promo code"
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
                  aria-label="Get offer"
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
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
