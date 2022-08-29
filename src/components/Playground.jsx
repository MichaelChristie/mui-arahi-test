import * as React from "react";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const CustomSlider = styled(Slider)({
  width: 300,
  color: "var(--color)",
  "& .MuiSlider-thumb": {
    [`&:hover, &.Mui-focusVisible`]: {
      boxShadow: "0px 0px 0px 8px var(--box-shadow)",
    },
    [`&.Mui-active`]: {
      boxShadow: "0px 0px 0px 14px var(--box-shadow)",
    },
  },
});

const successVars = {
  "--color": "#FF0000",
  color: "red",
  "--box-shadow": "rgb(76, 175, 80, .16)",
  "& :root": {
    backgroundColor: "#FF0000 !important",
    "--grid-vertical-lines": "lime !important",
    "--grid-vertical-color": "tomato !important",
    "--grid-horizontal-lines": "lime !important",
    "--grid-horizontal-color": "tomato !important",
  },
};

const defaultVars = {
  "--color": "#1976d2",
  "--box-shadow": "rgb(25, 118, 210, .16)",
};

export default function DynamicCSSVariables() {
  const [vars, setVars] = React.useState(defaultVars);

  const handleChange = (event) => {
    setVars(event.target.checked ? successVars : defaultVars);
  };

  return (
    // <React.Fragment>
    <>
      <FormControlLabel
        control={
          <Switch
            checked={vars === successVars}
            onChange={handleChange}
            color="primary"
            value="dynamic-class-name"
          />
        }
        label="Success"
      />
      <CustomSlider style={vars} defaultValue={30} sx={{ mt: 1 }} />
      <div className="main" style={vars}>
        hi
      </div>
    </>
    // </React.Fragment>
  );
}
