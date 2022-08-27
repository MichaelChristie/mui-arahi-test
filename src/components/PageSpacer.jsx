import * as React from "react";
import { Grid, Box } from "@mui/material/";
import PageLayout from "./PageLayout";

export default function PageSpacer({ children, footerContent }) {
  return (
    <>
      <Box
        sx={{
          mb: {
            xs: 2,
            sm: 4,
            md: 4,
            lg: 8,
            xl: 8,
          },
        }}
      ></Box>
    </>
  );
}
