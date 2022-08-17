import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";

export default function ShowBreakpoint() {
  return (
    <>
      <Box
        sx={{
          // position: "absolute",
          // background: "#FFD400",
          borderRadius: 2,

          // ml: 1,
        }}
      >
        <Box
          sx={{
            background: "#00a17c",
            px: 0.5,
            borderRadius: 2,
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
            background: "#00a17c",
            px: 0.5,
            borderRadius: 2,
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
            background: "#bfdcf0",
            px: 0.5,
            borderRadius: 2,
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
            background: "#ee6363",
            px: 0.5,
            borderRadius: 2,
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
            background: "#dfba00",
            px: 0.5,
            borderRadius: 2,
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
