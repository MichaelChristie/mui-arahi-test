import * as React from "react";

import Box from "@mui/material/Box";
import { Grid, InputAdornment, TextField, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Visibility from "@mui/icons-material/Visibility";
import { faTimes, faSearch } from "@fortawesome/pro-light-svg-icons";
import { VisibilityOff } from "@mui/icons-material";

import { faEye, faEyeSlash } from "@fortawesome/pro-light-svg-icons";

import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

function LoginForm() {
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
      <FormControl
        fullWidth
        variant="filled"
        sx={{ mb: 0, borderRadius: "8px" }}
      >
        <InputLabel htmlFor="filled-name" color="neutral">
          Email
        </InputLabel>
        <FilledInput
          id="filled-name"
          label="Email"
          // className={classes.textField}
          // value={values.name}
          // onChange={handleChange("name")}
          type="email"
          color="secondary"
          autoComplete="off"
          margin="normal"
          variant="filled"
          sx={{ mb: 0, borderRadius: "8px" }}
          // classes={{
          //   root: classes.root,
          // }}
        />
      </FormControl>

      {/* Hello */}

      <FormControl fullWidth variant="filled">
        <InputLabel htmlFor="outlined-adornment-password" color="neutral">
          Password
        </InputLabel>
        <FilledInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          autoComplete="off"
          variant="outlined"
          color="secondary"
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? (
                  <FontAwesomeIcon icon={faEyeSlash} size="md" />
                ) : (
                  <FontAwesomeIcon icon={faEye} size="md" />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Box sx={{ display: "flex", mt: 4 }}>
        <Box sx={{ flexGrow: 1, mt: 1 }}>
          Forgot your <a href="/recover">Login</a> |
          <a href="/recover"> Password</a>?
        </Box>
        <Box>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
}
export default LoginForm;
