import * as React from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material/";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faPhone,
  faCoffee,
} from "@fortawesome/pro-duotone-svg-icons";
import OverviewBlock from "./OverviewBlock";

export default function OverviewPanel({ children }) {
  return (
    <Box sx={{ background: "rgba(0, 116, 194, 0.16)", p: 2 }}>
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={12} md={4} sx={{ p: 2 }}>
            <OverviewBlock className={"faPhone"}>
              Lorem ipsum dolor sit amet
            </OverviewBlock>
          </Grid>
          <Grid item xs={12} md={4} sx={{ p: 2 }}>
            <OverviewBlock className={"faPhone"}>
              Consectetur adipiscing elit
            </OverviewBlock>
          </Grid>
          <Grid item xs={12} md={4} sx={{ p: 2 }}>
            <OverviewBlock className={"faPhone"}>
              Suspendisse malesuada lacus ex
            </OverviewBlock>
          </Grid>
          <Grid item xs={12} md={4} sx={{ p: 2 }}>
            <OverviewBlock className={"faPhone"}>
              Lorem ipsum dolor sit amet
            </OverviewBlock>
          </Grid>
          <Grid item xs={12} md={4} sx={{ p: 2 }}>
            <OverviewBlock className={"faPhone"}>
              Consectetur adipiscing elit
            </OverviewBlock>
          </Grid>
          <Grid item xs={12} md={4} sx={{ p: 2 }}>
            <OverviewBlock className={"faPhone"}>
              Suspendisse malesuada lacus ex
            </OverviewBlock>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
