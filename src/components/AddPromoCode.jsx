import * as React from "react";
import { Grid } from "@mui/material/";
import { InputAdornment, TextField } from "@mui/material";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export default function AddPromoCode() {
  return (
    <>
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
              endAdornment={<InputAdornment position="end"></InputAdornment>}
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
    </>
  );
}
