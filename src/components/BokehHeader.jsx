import * as React from "react";
import Box from "@mui/material/Box";
import backgroundImage from "../images/bokeh-clean_v1.7.svg";

export default function BokehHeader() {
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        height: 0,
        width: 0,
        background: "lime",
        zIndex: -1,
      }}
    >
      <Box
        sx={{
          height: 96,
          width: 1200,
          position: "fixed",
          // border: "1px solid #f1f1f1",
          top: 0,
          left: -48,
          zIndex: -10000,
          maxHeight: { xs: 64, sm: 64, md: 64, lg: 64, xl: 80 },
          // maxWidth: { xs: 200, md: 800 },
          // background: "rgba(255,0,0.5,0.5)",
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          // backgroundSize: "1200px",
          // backgroundPositionY: -480,
          // backgroundPositionX: -200,
          backgroundSize: {
            xs: 480,
            sm: 600,
            md: 960,
            lg: 1200,
            xl: 1200,
          },
          backgroundPositionY: {
            xs: -180,
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
