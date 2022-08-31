import * as React from "react";
import { Box } from "@mui/material/";
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

        alignSelf: "stretch",
        background: "rgba(255,50,200,0.50)",
        zIndex: 1,
      }}
    >
      {children}
    </Box>
  );
}
