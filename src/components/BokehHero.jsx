import * as React from "react";
import Box from "@mui/material/Box";
import bokeh from "../images/bokeh-clean_v1.7.svg";

export default function BokehHero() {
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        height: 0,
        width: 0,
        // background: "lime",
        zIndex: -1,
      }}
    >
      <Box
        sx={{
          width: {
            xs: 480,
            sm: 600,
            md: 960,
            lg: 1200,
            xl: 1200,
          },
          height: {
            xs: 480,
            sm: 600,
            md: 960,
            lg: 1200,
            xl: 1200,
          },
          position: "absolute",
          // border: "1px solid #f1f1f1",
          // top: { xs: -64, sm: -64, md: -72, lg: -72, xl: -108 }, // Match
          left: -48,
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
            xl: -200,
          },

          transition: "all 0.5s ease",
        }}
      ></Box>
    </Box>
  );
}
