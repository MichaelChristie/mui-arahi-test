import * as React from "react";
import { Box } from "@mui/material/";
import HomeLayoutPanelLeft from "./PanelLeft";
export default function HeroFlexContainer({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "flex-start",
        alignContent: "stretch",
        alignItems: "flex-start",
        // background: "aqua",
        minHeight: {
          xs: "90vh",
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
