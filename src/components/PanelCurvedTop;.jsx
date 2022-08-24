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
            lg: "32px 32px 0px 0px ",
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
          mr: {
            xs: 0,
            md: 0,
            lg: 16,
            xl: 24,
          },
          bgcolor: "background.paper",
        }}
      >
        <CTAZoneHomepage />
        {optionalContent}
      </Box>
    </>
  );
}
