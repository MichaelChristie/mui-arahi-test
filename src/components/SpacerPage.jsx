import * as React from "react";
import { Grid, Box } from "@mui/material/";

export default function SpacerPage() {
  return (
    <>
      <Box
        sx={{
          mb: {
            xs: 6,
            sm: 6,
            md: 4,
            lg: 8,
            xl: 8,
          },
        }}
      ></Box>
    </>
  );
}
