import * as React from "react";
import QuoteWrapper from "../components/QuoteWrapper";
import { Typography, Button, Box, Grid, ToggleButton } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@mui/material/IconButton";

import {
  faCoffee,
  faChargingStation,
  faBellSlash,
  faCloudShowersHeavy,
  faHouseFire,
  faChevronLeft,
} from "@fortawesome/pro-duotone-svg-icons";
export default function TitleBar({ title }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          p: 0,
        }}
      >
        <Box>
          <FontAwesomeIcon icon={faChevronLeft} className="inner" />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h1">{title}</Typography>
        </Box>
      </Box>
    </>
  );
}
