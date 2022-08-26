import * as React from "react";

import Box from "@mui/material/Box";
import { Grid, InputAdornment, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Visibility from "@mui/icons-material/Visibility";
import { faTimes, faSearch } from "@fortawesome/pro-light-svg-icons";
import { VisibilityOff } from "@mui/icons-material";

import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/pro-light-svg-icons";

function MiniHelpCentre() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <FormControl fullWidth variant="standard">
        <InputLabel color="neutral" htmlFor="help-centre-search">
          Search Help Centre
        </InputLabel>
        <Input
          // <FilledInput
          id="help-centre-search"
          type="text"
          // placeholder="e.g: What is business use?"
          color="secondary"
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="large" />
            </InputAdornment>
          }
          label="Search Help Centre"
        />
      </FormControl>
    </>
  );
}
export default MiniHelpCentre;
