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
  faBars,
  faScissors,
  faCircleUser,
  faClipboard,
} from "@fortawesome/pro-light-svg-icons";

import { faCoffee } from "@fortawesome/pro-duotone-svg-icons";
import HeaderQuote from "./HeaderQuote";
import PageLayout from "./PageLayout";

export default function DuotoneIcons() {
  return (
    <>
      <HeaderQuote />
      <Toolbar sx={{ mt: 4 }} />
      <PageLayout>
        <Typography variant="h1">Duotone Icons</Typography>
        <FontAwesomeIcon
          icon={faBars}
          sx={{
            color: "#FFD400",
          }}
        />
        <Box sx={{ mb: 24 }} />
        <></>
        <Box class="circle-sm size-64">
          <FontAwesomeIcon icon={faCoffee} class="inner" />
        </Box>
        <></>
        <Box sx={{ mb: 24 }} />
      </PageLayout>
    </>
  );
}
