import * as React from "react";
import { Box } from "@mui/material/";
import CTAZoneHomepage from "./CTAZoneHomepage";
export default function PanelCurvedTop({ children }) {
  return (
    <>
      <Box
        sx={{
          borderRadius: {
            xs: "32px 32px 0px 0px",
            lg: "32px 32px 0px 0px ",
          },

          p: {
            xs: 2,
            lg: 6,
          },
          bgcolor: "background.paper",
        }}
      >
        <CTAZoneHomepage />
      </Box>
    </>
  );
}
