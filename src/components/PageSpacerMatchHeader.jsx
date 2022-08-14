import * as React from "react";
import Box from "@mui/material/Box";

export default function PageSpacerMatchHeader() {
  return (
    <>
      <Box
        sx={{
          height: { xs: 64, sm: 64, md: 72, lg: 72, xl: 80 }, // Match
          background: "transparent",
        }}
      ></Box>
    </>
  );
}
