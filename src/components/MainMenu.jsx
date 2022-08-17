import * as React from "react";
import { Box, Button } from "@mui/material/";
import styles from "../build/css/_variables.css";
import ClaimMenu from "./navigation/ClaimMenu";
import ManagePolicyMenu from "./navigation/ManagePolicyMenu";
import OurInsuranceMenu from "./navigation/OurInsuranceMenu";
import HeaderIcons from "./HeaderIcons";
import LoginModal from "./navigation/LoginModal";

// import { Link } from "react-router-dom";

export default function Content() {
  return (
    <Box
      sx={{
        display: "flex",
        // background: "rgba(255,255,0,0.1)",
        width: "100%",
      }}
    >
      <Box
        component="div"
        sx={{
          flexGrow: 1,
          ml: 2,
        }}
      >
        <OurInsuranceMenu />
        <ManagePolicyMenu />
        <ClaimMenu />
      </Box>
      <Box
        sx={{
          display: "flex",
          //   background: "rgba(255,255,0,0.5)",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          component="div"
          sx={{ flexGrow: 0, background: "colorBaseDummy" }}
          className={styles.colorBaseDummy}
        >
          <Button
            color="primary"
            sx={{
              mr: 3,
              textTransform: "none",
              display: { xs: "none", sm: "inline-flex" },
            }}
          >
            Help &amp; Contact
          </Button>

          <HeaderIcons />
        </Box>
      </Box>
    </Box>
  );
}
