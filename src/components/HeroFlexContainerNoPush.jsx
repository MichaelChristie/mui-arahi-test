import * as React from "react";
import { Box } from "@mui/material/";
import HomeLayoutPanelLeft from "./PanelLeft";
export default function HeroFlexContainerNoPush({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "flex-start",
        alignContent: "stretch",
        alignItems: "flex-start",
        // background: "rgba(90, 255, 150, 0.750)",
        minHeight: {
          //xs: "90vh", //DON'T ACTIVATE THIS
          sm: "800px",
          md: "600px",
          lg: "600px",
        },
      }}
    >
      {children}
    </Box>
  );
}
