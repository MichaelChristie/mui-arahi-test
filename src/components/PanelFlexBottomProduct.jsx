import * as React from "react";
import { Box } from "@mui/material/";
import HeroFlexContainer from "./HeroFlexContainer";
import HeroFlexPanelBoxProduct from "./HeroFlexPanelBoxProduct";
import HeroMarketingMessage from "./HeroMarketingMessage19";
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";

export default function PanelBottomProduct({ children, bokehMessage }) {
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
      >
        <>{bokehMessage}</>
      </Box>
      <HeroFlexPanelBoxProduct>{children}</HeroFlexPanelBoxProduct>
    </HeroFlexContainer>
  );
}
