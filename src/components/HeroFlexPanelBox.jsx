import * as React from "react";
import { Box, Grid } from "@mui/material/";
import HomeLayoutPanelLeft from "./PanelLeft";
export default function HeroFlexPanelBox({ children }) {
  return (
    <Box
      sx={{
        order: {
          xs: 1,
          lg: 2,
        },
        flex: {
          xs: "0 0 auto",
          lg: "0 0 auto",
        },
        mx: {
          xs: -2,
          sm: -2,
          md: 0,
        },
        alignSelf: "stretch",
        // background: "rgba(255,50,200,0.50)",
        zIndex: 1,
      }}
    >
      <Grid
        container
        sx={
          {
            // background: "rgba(255,50,200,0.50)",
          }
        }
        columns={{ xs: 12, xl: 6 }}
      >
        <Grid
          item
          xs={false}
          md={false}
          lg={2}
          xl={0.5}
          className="showMe1"
        ></Grid>
        <Grid item xs={12} md={12} lg={8} xl={5} className="showMe1">
          {children}
        </Grid>
        <Grid
          item
          xs={false}
          md={false}
          lg={2}
          xl={false}
          className="showMe1"
        ></Grid>
      </Grid>
    </Box>
  );
}
