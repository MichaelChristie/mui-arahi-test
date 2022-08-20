import * as React from "react";
import { Box } from "@mui/material/";
import HeroFlexContainer from "./HeroFlexContainer";
import HeroFlexPanelBox from "./HeroFlexPanelBox";
import HeroMarketingMessage from "./HeroMarketingMessage";
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";

export default function PanelBottom({ children }) {
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
            lg: "1 0 auto",
          },
          alignSelf: "stretch",
          // background: "rgba(50,120,0,0.125)",
          zIndex: 1,
        }}
      >
        <>
          <PanelLeft>
            <HeroMarketingMessage />
          </PanelLeft>
        </>
      </Box>
      <HeroFlexPanelBox>{children}</HeroFlexPanelBox>
    </HeroFlexContainer>
  );
}
