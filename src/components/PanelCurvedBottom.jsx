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

          pt: {
            xs: 2,
            md: 4,
            lg: 6,
          },
          px: {
            xs: 2,
            md: 4,
            lg: 6,
          },
          pb: {
            xs: 2,
            md: 4,
            lg: 2,
          },
          mr: {
            xs: 0,
            lg: 0,
            xl: 24,
          },
          bgcolor: "background.paper",
        }}
      >
        <CTAZoneHomepage />
      </Box>
    </>
  );
}
