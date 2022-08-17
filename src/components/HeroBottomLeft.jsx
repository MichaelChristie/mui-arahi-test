import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";
import PanelTopRight from "./PanelTopRight";
import CTAZoneHomepage from "./CTAZoneHomepage";
import HeroImageBlock from "./HeroImageBlock";

export default function HeroBottomLeft() {
  return (
    <>
      <HeroImageBlock>
        <PanelTopRight>
          <CTAZoneHomepage />
        </PanelTopRight>
      </HeroImageBlock>
    </>
  );
}
