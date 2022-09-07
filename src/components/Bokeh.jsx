import * as React from "react";
import Box from "@mui/material/Box";
import bokeh from "../images/bokeh-clean_v1.7.svg";
import PageLayoutBreakout from "./PageLayoutBreakout";

export default function Bokeh() {
  return (
    <PageLayoutBreakout>
      <Box
        sx={{
          height: 480,
          width: {
            xs: 360,
            sm: 600,
            md: 960,
            lg: 1200,
            xl: 1200,
          },
          position: "absolute",
          // border: "1px solid #f1f1f1",
          top: 0,
          // left: -640, // was 48
          left: {
            xs: -90,
            sm: -180,
            md: -240,
            lg: -400,
            xl: -400,
          },
          zIndex: -10000,
          // maxHeight: { xs: 64, md: 960 },
          // maxWidth: { xs: 200, md: 800 },
          backgroundImage: `url(${bokeh})`,
          backgroundRepeat: "no-repeat",
          // backgroundColor: "#FF0000",
          backgroundSize: {
            xs: 480,
            sm: 600,
            md: 960,
            lg: 1200,
            xl: 1200,
          },
          backgroundPositionY: {
            xs: -160,
            sm: -240,
            md: -480,
            lg: -480,
            xl: -480,
          },
          backgroundPositionX: {
            xs: -96,
            sm: -108,
            md: -200,
            lg: -200,
            xl: 0,
          },

          transition: "all 0.5s ease",
        }}
      ></Box>
    </PageLayoutBreakout>
  );
}
