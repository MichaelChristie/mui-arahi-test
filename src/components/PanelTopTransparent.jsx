import * as React from "react";
import { Box } from "@mui/material/";
import CTAZoneHomepage from "./CTAZoneHomepage";
import MostTrustedCard from "../components/MostTrustedCard";

export default function PanelTopTransparent({ children, optionalContent }) {
  return (
    <>
      <Box
        sx={{
          borderRadius: {
            xs: "32px 32px 0px 0px",
            md: "0px 0px 32px 32px",
          },

          pt: {
            xs: 4,
            md: 4,
            lg: 6,
          },
          px: {
            xs: 4,
            md: 4,
            lg: 6,
          },
          pb: {
            xs: 4,
            md: 4,
            lg: 6,
          },
          // mx: {
          //   xs: 0,
          //   md: 3,
          //   lg: 6,
          //   xl: 12,
          // },
          //   bgcolor: "background.paper",
        }}
      >
        <CTAZoneHomepage />

        {optionalContent}
        {/* <CTAZoneHomepage belowCTA={<MostTrustedCard />} /> */}
      </Box>
    </>
  );
}
