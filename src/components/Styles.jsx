import * as React from "react";
import {
  Grid,
  Box,
  Button,
  Paper,
  Typography,
  Divider,
  Alert,
  AlertTitle,
} from "@mui/material/";

import PageLayout from "../components/PageLayout";
import HeaderBrochure from "../components/HeaderBrochure";
import zIndex from "@mui/material/styles/zIndex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCheckCircle,
  faEye,
  faEllipsis,
  faHome,
  faTimes,
  faExclamationCircle,
} from "@fortawesome/pro-light-svg-icons";

import StylesTypography from "./StylesTypography";
import SpacerPage from "./SpacerPage";
import StylesAlertsFull from "./StylesAlertsFull";
import NavMegaMenu from "./navigation/NavMegaMenu";
import StylesAlertsWarning from "./Styles/StylesAlertsWarning";
import StylesAlertsInfo from "./Styles/StylesAlertsInfo";
import StylesRegoFinderTabs from "./Styles/StylesRegoFinderTabs";
import RegoModelSelector from "./RegoModelSelector";
import StyleRegoCarResults from "./Styles/StyleRegoCarResults";
import StylesPlaceholderHorizontalCardReturnedCar from "./Styles/StylesPlaceholderHorizontalCardReturnedCar";
import CardImage from "./CardImage";
import StylesCard from "./Styles/StylesCard";
import StylesButtons from "./Styles/StylesButtons";
import SpacerSection from "./SpacerSection";
import StylesIconButtons from "./Styles/StylesIconButtons";
import StylesIcons from "./Styles/StylesIcons";
import StylesChips from "./Styles/StylesChips";
import StylesValidationTextFields from "./Styles/StylesValidationTextFields";
import StylesAccordion from "./Styles/StylesAccordion";
import DuotoneIcons from "./DuotoneIcons";
import DynamicCSSVariables from "./Playground";
export default function Styles() {
  return (
    <>
      <HeaderBrochure />

      <PageLayout>
        <Grid
          item
          container
          spacing={{
            xs: 0,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 2,
          }}
        >
          <Grid item xs={12} md={6} lg={4}>
            <StylesTypography />
            <DuotoneIcons />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <StylesRegoFinderTabs />
            <StylesAlertsInfo />
            <StylesButtons />
            <SpacerSection />
            <StylesIcons />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <StylesCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <StylesPlaceholderHorizontalCardReturnedCar />
            <SpacerSection />
            <StylesIconButtons />
            <SpacerSection />
            <StylesValidationTextFields />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <StylesAlertsWarning />
            <StylesChips />
            <SpacerSection />
            <StylesAccordion />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <StyleRegoCarResults />
            <SpacerSection />
            <RegoModelSelector />
          </Grid>
        </Grid>

        <DynamicCSSVariables />
        <SpacerPage />
        <StylesAlertsFull />
        <SpacerPage />
      </PageLayout>
    </>
  );
}
