import * as React from "react";
import { Box } from "@mui/material/";
import CTAZoneHomepage from "./CTAZoneHomepage";
import MostTrustedCard from "../components/MostTrustedCard";

export default function PanelCurvedTop({ children, optionalContent }) {
  return (
    <>
      <Box
        sx={{
          borderRadius: {
            xs: "32px 32px 0px 0px",
            md: "32px 32px 0px 0px ",
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
            md: 0,
            lg: 0,
          },
          // mx: {
          //   xs: 0,
          //   md: 3,
          //   lg: 6,
          //   xl: 12,
          // },
          bgcolor: "background.paper",
          // bgcolor: "lime",
        }}
      >
        <CTAZoneHomepage />
        {optionalContent}
      </Box>
    </>
  );
}
