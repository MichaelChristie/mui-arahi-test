import * as React from "react";
import PageLayout from "../components/PageLayout";
import HeaderBrochure from "../components/HeaderBrochure";
import CampaignSwitcher from "../components/CampaignSwitcher";
import CampaignProducts from "../components/CampaignProducts.jsx";

export default function Campaign() {
  return (
    <>
      <HeaderBrochure />

      <CampaignSwitcher />

      <PageLayout>
        <CampaignProducts />
      </PageLayout>
    </>
  );
}
