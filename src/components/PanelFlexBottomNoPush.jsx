import * as React from "react";
import { Box } from "@mui/material/";
import HeroFlexContainerNoPush from "./HeroFlexContainerNoPush";
import HeroFlexPanelBox from "./HeroFlexPanelBox";
import HeroMarketingMessage from "./HeroMarketingMessage19";
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";

export default function PanelBottomNoPush({ children, bokehMessage }) {
  return (
    <HeroFlexContainerNoPush>
      {/* EXPANDS TO ALLOW THE PANEL TO STICK TO THE BOTTOM */}
      <Box
        sx={{
          order: {
            xs: 1,
            lg: 2,
          },
          flex: {
            xs: "1 0 auto",
            lg: "1 0 auto",
          },
          alignSelf: "stretch",
          // background: "rgba(150,120,150,0.5)",
          zIndex: 1,
        }}
      >
        <>{bokehMessage}</>
      </Box>
      <HeroFlexPanelBox>{children}</HeroFlexPanelBox>
    </HeroFlexContainerNoPush>
  );
}
