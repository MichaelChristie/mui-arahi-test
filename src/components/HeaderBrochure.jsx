import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";

import Header from "./HeaderInner";
import Bokeh from "./Bokeh";
import PageSpacerMatchHeader from "./PageSpacerMatchHeader";
import BokehHero from "./BokehHero";

export default function HeaderBrochure() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 0,
          height: 0,
          background: "#FF0000",
          zIndex: 1,
        }}
      >
        <BokehHero />
      </Box>
      <Header />
      <Bokeh />
      <PageSpacerMatchHeader />
    </>
  );
}
