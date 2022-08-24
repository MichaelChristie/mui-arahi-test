import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";

import PageSpacerMatchHeader from "./PageSpacerMatchHeader";
import BokehHero from "./BokehHero";
import HeaderInnerQuote from "./HeaderInnerQuote";
import LinearProgress from "@mui/material/LinearProgress";

export default function HeaderQuote({ progress }) {
  return (
    <>
      {/* <Box
        sx={{
          position: "relative",
          width: 0,
          height: 10,
          background: "#FF0000",
          zIndex: 1,
        }}
      > */}

      {/* </Box> */}
      <HeaderInnerQuote progress={progress} />
    </>
  );
}
