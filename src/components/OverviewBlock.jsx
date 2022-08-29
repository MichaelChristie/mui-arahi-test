import * as React from "react";
import { Box, Grid, Container, Typography } from "@mui/material/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faPhone,
  faCoffee,
} from "@fortawesome/pro-duotone-svg-icons";

export default function OverviewBlock({ children, className }) {
  return (
    <>
      <Grid item container>
        <Grid item xs={3}>
          <div className="circle circle-sm size-64 fa-2x">
            <FontAwesomeIcon icon={faPhone} className="inner" />
          </div>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">{children}</Typography>
          <Typography variant="paragraph">
            Consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. {className}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
