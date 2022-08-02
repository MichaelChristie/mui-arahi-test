import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";

export default function ShowBreakpoint() {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          background: "#FFD400",
          zIndex: 1,
          bottom: 8,
          right: 8,
          p: 1,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          XS
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          SM
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "none",
              xl: "none",
            },
          }}
        >
          MD
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "none",
            },
          }}
        >
          LG
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
            },
          }}
        >
          XL
        </Box>
      </Box>
    </>
  );
}
