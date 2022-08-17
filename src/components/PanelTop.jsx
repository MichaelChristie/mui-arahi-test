import * as React from "react";
import { Box } from "@mui/material/";
import HomeLayoutPanelLeft from "./PanelLeft";
export default function PanelTop({ children }) {
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
          background: "rgba(50,120,0,0.5)",
        }}
      >
        {/* EXPANDS TO ALLOW THE PANEL TO STICK TO THE BOTTOM */}
      </Box>
      <Box
        sx={{
          order: {
            xs: 2,
            lg: 1,
          },
          flex: {
            xs: "0 0 auto",
            lg: "0 0 auto",
          },

          alignSelf: "stretch",
          background: "rgba(255,120,0,0.25)",
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
