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
import PageLayoutBreakout from "../components/PageLayoutBreakout";
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
  faChevronDown,
  faArrowDownToLine,
} from "@fortawesome/pro-light-svg-icons";
import { styled } from "@mui/material/styles";
import PageSpacer from "../components/SpacerPage";
import PageDocumentationLayout from "../components/PageDocumentationLayout";
import SpacerSection from "../components/SpacerSection";
import Breadcrumbs from "../components/Breadcrumbs";
import SpacerPage from "../components/SpacerPage";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MyGrid() {
  return (
    <>
      <HeaderBrochure />

      <PageLayout>
        <Box sx={{ pt: 2 }}>
          <Breadcrumbs />
          <SpacerSection />
          <Typography variant="h1">Grid</Typography>
          <SpacerSection />

          <Typography variant="overline">Simple</Typography>
          <Grid container spacing={{ xs: 1, sm: 2, lg: 3 }}>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>

        <SpacerPage />
        <Typography variant="overline">Grid Breakout</Typography>
        <SpacerSection />
      </PageLayout>
      <PageLayoutBreakout>
        {/* <Box sx={{ maxWidth: 1980, margin: "0 auto" }}> */}
        <Grid container spacing={{ xs: 1, sm: 2, lg: 3 }}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Breakout Grid</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>

          <Grid item xs={6}>
            <Item>xs=6</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=6</Item>
          </Grid>
        </Grid>
        {/* </Box> */}
      </PageLayoutBreakout>
      <SpacerPage />
      <SpacerPage />
    </>
  );
}
