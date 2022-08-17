import * as React from "react";
import PanelTopRight from "../components/PanelTopRight";
import CTAZoneHomepage from "./CTAZoneHomepage";

export default function HeroInnerContents() {
  return (
    <>
      <PanelTopRight sx={{ zIndex: 1, position: "absolute" }}>
        <CTAZoneHomepage />
      </PanelTopRight>
    </>
  );
}
