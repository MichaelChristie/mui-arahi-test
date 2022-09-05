import * as React from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material/";
import HeroImageXS from "../images/kitchen.png";
import HeroImageSM from "../images/kitchen.png";
import HeroImageMD from "../images/kitchen.png";
import HeroImageLG from "../images/kitchen.png";
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
    <Box sx={{ background: "rgba(0, 116, 194, 0.16)", m: -2 }}>
      <Box
        sx={{
          // height: {
          //   xs: "90vh",
          //   sm: "800px",
          //   md: "400px",
          //   lg: "400px",
          // },
          maxWidth: "1920px",
          margin: "0 auto",
          borderRadius: "4px",
          backgroundImage: {
            xs: `url(${HeroImageXS})`,
            sm: `url(${HeroImageSM})`,
            md: `url(${HeroImageMD})`,
            lg: `url(${HeroImageLG})`,
          },

          backgroundSize: {
            xs: "contain",
            lg: "cover",
          },
          backgroundRepeat: "no-repeat",

          backgroundPosition: "bottom center",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <OverviewBlock className={"faPhone"}>
                Lorem ipsum dolor sit amet
              </OverviewBlock>
            </Grid>
            <Grid item xs={12} md={4}>
              <OverviewBlock className={"faPhone"}>
                Consectetur adipiscing elit
              </OverviewBlock>
            </Grid>
            <Grid item xs={12} md={4}>
              <OverviewBlock className={"faPhone"}>
                Suspendisse malesuada lacus ex
              </OverviewBlock>
            </Grid>
            <Grid item xs={12} md={4}>
              <OverviewBlock className={"faPhone"}>
                Lorem ipsum dolor sit amet
              </OverviewBlock>
            </Grid>
            <Grid item xs={12} md={4}>
              <OverviewBlock className={"faPhone"}>
                Consectetur adipiscing elit
              </OverviewBlock>
            </Grid>
            <Grid item xs={12} md={4}>
              <OverviewBlock className={"faPhone"}>
                Suspendisse malesuada lacus ex
              </OverviewBlock>
            </Grid>
            <Grid item xs={12} md={4}>
              <OverviewBlock className={"faPhone"}>
                Lorem ipsum dolor sit amet
              </OverviewBlock>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={4}>
              <OverviewBlock className={"faPhone"}>
                Suspendisse malesuada lacus ex
              </OverviewBlock>
            </Grid>
          </Grid>
        </Box>
        <Grid item xs={12}>
          <Box sx={{ height: "700px", background: "transparent" }}></Box>
        </Grid>
      </Box>
    </Box>
  );
}
