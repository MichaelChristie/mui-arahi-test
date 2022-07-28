import * as React from "react";
import Box from "@mui/material/Box";
import backgroundImage from "../images/bokeh-clean_v1.7.svg";

// import Bokeh from "../images/circle.svg";
// import theme from "./ThemeArahi";
// import { ThemeProvider } from "@mui/material/styles";

export default function Bokeh() {
  return (
    // <ThemeProvider theme={theme}>
    <Box
      component="div"
      sx={{
        height: 0,
        width: 0,
        background: "lime",
      }}
    >
      <Box
        sx={{
          height: 480,
          width: 1200,
          position: "absolute",
          // border: "1px solid #f1f1f1",
          top: 0,
          left: -48,
          zIndex: -10000,
          maxHeight: { xs: 64, md: 960 },
          // maxWidth: { xs: 200, md: 800 },
          opacity: "1",
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          // backgroundColor: "red",
          backgroundSize: "1200px",
          backgroundPositionY: -480,
          backgroundPositionX: -200,
        }}
      />
      hello bokeh
    </Box>
    // </ThemeProvider>
  );
}
