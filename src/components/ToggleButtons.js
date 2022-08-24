import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import MuiToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";

const ToggleButton = styled(MuiToggleButton)(({ selectedcolor }) => ({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "rgba(0,0,0,0.75)",
    backgroundColor: selectedcolor,
  },
}));

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      size="large"
      exclusive
      onChange={handleAlignment}
    >
      {/* <Button color="primary" selectedcolor="#FFD400">
        No
      </Button>
      <Button color="primary" selectedcolor="#FFD400">
        Yes
      </Button> */}

      <ToggleButton value="left" color="primary" selectedcolor="#FFD400">
        Yes
      </ToggleButton>
      <ToggleButton value="center" color="primary" selectedcolor="#FFD400">
        No
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
