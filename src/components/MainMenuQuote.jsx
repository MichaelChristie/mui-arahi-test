import * as React from "react";
import { Box, Button } from "@mui/material/";
import styles from "../build/css/_variables.css";
import ClaimMenu from "./navigation/ClaimMenu";
import ManagePolicyMenu from "./navigation/ManagePolicyMenu";
import OurInsuranceMenu from "./navigation/OurInsuranceMenu";
import HeaderIcons from "./HeaderIcons";

// import { Link } from "react-router-dom";

export default function MainMenuQuote() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          ml: 2,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          //   background: "rgba(255,255,0,0.5)",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box component="div" sx={{ flexGrow: 0, background: "colorBaseDummy" }}>
          <HeaderIcons />
        </Box>
      </Box>
    </Box>
  );
}
