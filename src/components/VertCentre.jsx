import * as React from "react";

import { Button, Box, Typography, Grid } from "@mui/material";

function VertCentre({ children }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          //   background: "rgba(50,0,0,0.25)",
        }}
      >
        <Box
          sx={{
            flex: "0 1 auto",
            height: "100%",
            // background: "rgba(50,0,0,0.25)",
          }}
        ></Box>
        <Box
          sx={{
            flexShrink: 1,
            // height: "400px",
            // background: "rgba(0,0,0,0.0.25)",
          }}
        >
          {children}
        </Box>
        <Box
          // Vert centre only for small devices
          sx={{
            flex: {
              xs: "0 1 auto",
              md: "0 0 auto",
            },
            // background: "rgba(50,0,0,0.25)",
            height: "100%",
          }}
        ></Box>
      </Box>
    </>
  );
}

export default VertCentre;
