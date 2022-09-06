import * as React from "react";
import PageLayout from "../components/PageLayout";
import HeaderBrochure from "../components/HeaderBrochure";
import CampaignSwitcher from "../components/CampaignSwitcher";
import CampaignProducts from "../components/CampaignProducts.jsx";
import HeroSwitcher from "../components/HeroSwitcher";
import { Typography } from "@mui/material/";
export default function Campaign() {
  return (
    <>
      <HeaderBrochure />
      {/* <HeroSwitcher /> */}
      <CampaignSwitcher />
      <PageLayout>
        {/* <Typography variant="h2"> Campaign Landing Page</Typography> */}
        <CampaignProducts />
      </PageLayout>
    </>
  );
}
