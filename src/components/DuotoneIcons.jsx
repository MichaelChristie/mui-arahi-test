import * as React from "react";
import { Grid, Box, Paper, Typography, Divider, Toolbar } from "@mui/material/";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@mui/material/IconButton";

import {
  faCoffee,
  faChargingStation,
  faBellSlash,
  faCloudShowersHeavy,
  faHouseFire,
} from "@fortawesome/pro-duotone-svg-icons";
import HeaderQuote from "./HeaderQuote";
import PageLayout from "./PageLayout";
import SpacerSection from "./SpacerSection";

export default function DuotoneIcons() {
  return (
    <>
      <></>
      <SpacerSection />
      <Grid item container>
        <Grid item xs={6} md={3} lg={2}>
          <Box className="circle-sm size-64">
            <FontAwesomeIcon icon={faBellSlash} className="inner" />
          </Box>
        </Grid>

        <Grid item xs={6} md={3} lg={2}>
          <Box className="circle-sm size-64">
            <FontAwesomeIcon icon={faChargingStation} className="inner" />
          </Box>
        </Grid>
        <Grid item xs={6} md={3} lg={2}>
          <Box className="circle-sm size-64">
            <FontAwesomeIcon icon={faHouseFire} className="inner" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
