import * as React from "react";
import { Box } from "@mui/material/";
import HeroFlexContainer from "./HeroFlexContainer";
import HeroFlexPanelBox from "./HeroFlexPanelBox";

export default function PanelFlexVertCentre({ children }) {
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
          // background: "rgba(150,120,150,0.5)",
          zIndex: 1,
        }}
      ></Box>
      <HeroFlexPanelBox>{children}</HeroFlexPanelBox>

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
      ></Box>
    </HeroFlexContainer>
  );
}
