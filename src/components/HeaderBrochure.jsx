import * as React from "react";
import { Grid, Box, Button, Typography, Toolbar } from "@mui/material/";

import Header from "./HeaderInner";
import Bokeh from "./Bokeh";
import PageSpacerMatchHeader from "./PageSpacerMatchHeader";
import BokehHero from "./BokehHero";
import PageLayout from "./PageLayout";
import PageLayoutBreakout from "./PageLayoutBreakout";

export default function HeaderBrochure() {
  return (
    <>
      <Header />
      <Bokeh />
      {/* NEW */}
      <PageSpacerMatchHeader />
    </>
  );
}
