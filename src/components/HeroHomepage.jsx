import * as React from "react";
import { Grid, Box, Button, Typography, Tab, TabPanel } from "@mui/material/";
import PanelTopRight from "../components/PanelTopRight";
import CTAZoneHomepage from "./CTAZoneHomepage";
import HeroImageBlock from "./HeroImageBlock";
import HeroBottomLeft from "./HeroBottomLeft";
import HeroSwitcher from "./HeroSwitcher";

export default function HeroHomepage() {
  return (
    <>
      {/* <HeroBottomLeft /> */}
      <Box sx={{ background: "transparent", zIndex: 1 }}>
        <HeroSwitcher />
      </Box>
    </>
  );
}
