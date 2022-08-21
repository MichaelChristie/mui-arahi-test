import * as React from "react";
import { Box } from "@mui/material/";
import CTAZoneHomepage from "./CTAZoneHomepage";
export default function PanelCurvedBottom({ children }) {
  return (
    <>
      <Box
        sx={{
          borderRadius: {
            xs: "32px 32px 0px 0px",
            lg: "0px 0px 32px 32px",
          },

          p: {
            xs: 2,
            lg: 6,
          },
          mr: {
            xs: 0,
            lg: 8,
          },
          bgcolor: "background.paper",
        }}
      >
        <CTAZoneHomepage />
      </Box>
    </>
  );
}
