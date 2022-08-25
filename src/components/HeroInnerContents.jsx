import * as React from "react";
import PanelTop from "./PanelFlexTop";
import PanelBottom from "./PanelFlexBottom";
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";
import PanelCurvedTop from "./PanelCurvedTop;";
import PanelCurvedBottom from "./PanelCurvedBottom";

export default function HeroInnerContents() {
  return (
    <>
      <PanelTop sx={{ zIndex: 1, position: "absolute" }}>
        <PanelLeft>
          <PanelCurvedBottom />
        </PanelLeft>
      </PanelTop>
    </>
  );
}
