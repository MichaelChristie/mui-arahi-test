import * as React from "react";
import { Box } from "@mui/material/";
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";
import CTAZoneHomepage from "./CTAZoneHomepage";
import PanelCurvedTop from "./PanelCurvedTop;";
import { Typography } from "@mui/joy";
export default function PanelBottom({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "flex-start",
        alignContent: "stretch",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          order: {
            xs: 1,
            lg: 2,
          },
          flex: {
            xs: "1 0 auto",
            lg: "1 0 auto",
          },
          alignSelf: "stretch",
          background: "#FFDD00",
        }}
      >
        <></>
        {/* EXPANDS TO ALLOW THE PANEL TO STICK TO THE BOTTOM */}
      </Box>
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

          alignSelf: "stretch",
          background: "rgba(150,255,130,0.25)",
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
