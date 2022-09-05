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
          xl: 0,
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
        columns={{ xs: 12, xl: 7 }}
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
      >
        <Grid
          item
          xs={false}
          md={false}
          lg={2}
          xl={1}
          className="showMe1"
          sx={
            {
              // background: "rgba(255,50,200,0.50)",
            }
          }
        ></Grid>
        <Grid item xs={12} md={12} lg={8} xl={5} className="showMe1">
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
