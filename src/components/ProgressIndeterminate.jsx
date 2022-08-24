import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";
import { keyframes } from "@emotion/react";

export default function ProgressIndeterminate() {
  const indeterminate1Keyframes = keyframes({
    "0%": {
      left: "-35%",
      right: "100%",
    },
    "100%": {
      left: "0%",
      right: "0%",
    },
  });

  const StyledLinearProgress = styled(LinearProgress)({
    "& .MuiLinearProgress-bar1Indeterminate": {
      width: "auto",
      animation: `${indeterminate1Keyframes} 6s linear forwards`,
    },
    "& .MuiLinearProgress-bar2Indeterminate": {
      display: "none",
    },
  });

  return (
    <Box sx={{ width: "100%", m: 0 }}>
      <StyledLinearProgress variant="indeterminate" />
    </Box>
  );
}
