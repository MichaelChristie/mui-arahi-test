import * as React from "react";
import { Box } from "@mui/material/";
import CTAZoneHomepage from "./CTAZoneHomepage";
import MostTrustedCard from "../components/MostTrustedCard";

export default function PanelCurvedBottom({ children, optionalContent }) {
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
            lg: 4,
          },
          px: {
            xs: 2,
            md: 4,
            lg: 6,
          },
          pb: {
            xs: 2,
            md: 4,
            lg: 6,
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

        {optionalContent}
        {/* <CTAZoneHomepage belowCTA={<MostTrustedCard />} /> */}
      </Box>
    </>
  );
}
