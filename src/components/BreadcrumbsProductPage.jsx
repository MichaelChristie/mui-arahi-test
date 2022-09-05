import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Grid } from "@mui/material";
import BreadcrumbsThreeDeep from "../components/BreadcrumbsThreeDeep";

export default function BreadcrumbsProductPage() {
  return (
    <>
      <Grid container spacing={{ xs: 1, sm: 2, lg: 3 }}>
        <Grid item xs={false} xl={2}></Grid>
        <Grid item xs={12} xl={6} className="showMe1">
          <Box sx={{ pt: 2, ml: { xs: -2, lg: -3 } }}>
            <BreadcrumbsThreeDeep sx={{ pt: 2 }} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
