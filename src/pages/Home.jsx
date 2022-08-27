import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";
import PageLayout from "../components/PageLayout";
// import PanelTopRight from "../components/PanelTop";
import Content from "../components/Content";
import ProductGrid from "../components/ProductGrid";
import BasicCard from "../components/Card";
import HeaderBrochure from "../components/HeaderBrochure";
import HeroSwitcher from "../components/HeroSwitcher";
import LiveChat from "../components/LiveChat";
import PageSpacer from "../components/PageSpacer";

export default function Home() {
  return (
    <>
      <HeaderBrochure />
      <HeroSwitcher />
      <LiveChat />
      <PageLayout>
        <PageSpacer />
        <ProductGrid />
        <PageSpacer />
        <BasicCard />
        <PageSpacer />
      </PageLayout>
      <PageSpacer />
    </>
  );
}
