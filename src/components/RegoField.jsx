import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
} from "@mui/material";

export default function RegoField() {
  return (
    <div>
      <FormControl sx={{}} variant="filled">
        <InputLabel htmlFor="promo code">Rego</InputLabel>
        <FilledInput
          id="promo code"
          type="text"
          label="Rego"
          value="MYREGO"
          color="secondary"
          endAdornment={<InputAdornment position="end"></InputAdornment>}
        />
      </FormControl>
    </div>
  );
}
