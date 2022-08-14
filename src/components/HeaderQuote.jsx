import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";

import PageSpacerMatchHeader from "./PageSpacerMatchHeader";
import BokehHero from "./BokehHero";
import HeaderInnerQuote from "./HeaderInnerQuote";

export default function HeaderQuote() {
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
      ></Box>
      <HeaderInnerQuote />
    </>
  );
}
