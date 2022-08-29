import * as React from "react";
import { Grid, Box } from "@mui/material/";

export default function SpacerPage() {
  return (
    <>
      <Box
        sx={{
          mb: {
            xs: 2,
            sm: 4,
            md: 4,
            lg: 8,
            xl: 8,
          },
        }}
      ></Box>
    </>
  );
}
