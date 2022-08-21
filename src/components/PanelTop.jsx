import * as React from "react";
import { Box } from "@mui/material/";
import HomeLayoutPanelLeft from "./PanelLeft";
import HeroFlexContainer from "./HeroFlexContainer";
import HeroFlexPanelBox from "./HeroFlexPanelBox";
import HeroMarketingMessage from "./HeroMarketingMessage";
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";

export default function PanelTop({ children }) {
  return (
    <HeroFlexContainer>
      {/* EXPANDS TO ALLOW THE PANEL TO STICK TO THE BOTTOM */}
      <Box
        sx={{
          order: {
            xs: 1,
            lg: 2,
          },
          flex: {
            xs: "1 0 auto",
            lg: "0 0 auto",
          },
          alignSelf: "stretch",
          // background: "rgba(50,120,0,0.5)",
          zIndex: 1,
        }}
      ></Box>

      <HeroFlexPanelBox>
        {children}

        {/* <HeroMarketingMessage /> */}
      </HeroFlexPanelBox>
    </HeroFlexContainer>
  );
}
