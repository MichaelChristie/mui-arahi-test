import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";

export default function HeroAnimatedBalloons({ children }) {
  return (
    <>
      <Box sx={{ position: "relative", maxHeight: "340px" }}>
        <Box
          className="Animated_Baloons2"
          sx={{ backgroundColor: "transparent", maxHeight: "540px" }}
        >
          <Box className="Sparkle-wrapper">
            <Box className="Sparkle1"></Box>
            <Box className="Sparkle2"></Box>
          </Box>
          <Box className="PrezzyBalloon1"></Box>
          <Box className="group-wrapper">
            <Box className="PrezzyBalloon3"></Box>
            <Box className="PrezzyBalloon2"></Box>
            <Box className="PrezzyBalloon1a"></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
