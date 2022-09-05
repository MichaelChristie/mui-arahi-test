import * as React from "react";
import { Grid, Box, Button, Paper, Typography } from "@mui/material/";
import { useNavigate, useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import BokehHero from "../components/BokehHero";
import ProductAccordion from "../components/ProductAccordion";
import MostTrustedCard from "../components/MostTrustedCard";
import HeroImage from "../images/CONTENTS_DTP_03.jpg";
import HeroImageMobile from "../images/CONTENTS_DTP_03_MOB_03.jpg";

import PageLayout from "../components/PageLayout";
import Panel from "../components/PanelBottomLeft";
import Quicklinks from "../components/navigation/Quicklinks";
import HeaderBrochure from "../components/HeaderBrochure";

import PanelFlexBottomProduct from "../components/PanelFlexBottomProduct";
import PanelLeft from "../components/PanelLeft";
// import PanelRight from "../components/PanelRight";
import PanelCurvedTop from "../components/PanelCurvedTop;";
import HeroImagePhotoWizzard from "../components/HeroImagePhotoWizzard";
import HeroMarketingMessage19 from "../components/HeroMarketingMessage19";
import ProductPanelCarInsurance from "../components/ProductPanelCarInsurance";
import PlaceholderContent from "../Utilities/PlaceholderContent";
import BreadcrumbsProductPage from "../components/BreadcrumbsProductPage";
import SpacerSection from "../components/SpacerSection";
import SpacerPage from "../components/SpacerPage";

export default function Product() {
  let { producttype } = useParams();

  return (
    <>
      <HeaderBrochure />

      <HeroImagePhotoWizzard>
        {/* <PanelLeft rightCol={<PlaceholderContent />}> */}
        <PanelLeft>
          <PanelFlexBottomProduct bokehMessage={<BreadcrumbsProductPage />}>
            {/* Bottom Left */}
            <ProductPanelCarInsurance />
          </PanelFlexBottomProduct>
        </PanelLeft>
      </HeroImagePhotoWizzard>

      <PageLayout>
        <SpacerPage />
        <ProductAccordion />
      </PageLayout>
      <SpacerPage />
    </>
  );
}
