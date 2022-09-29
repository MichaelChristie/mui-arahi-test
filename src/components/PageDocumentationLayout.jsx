import * as React from "react";
import { Grid, Box } from "@mui/material/";
import PageMargin from "./pageMargin";
import DocumentationTabs from "./DocumentationTabs";
import SpacerSection from "./SpacerSection";

export default function PageDocumentationLayout({ children }) {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={8} order={{ xs: 2, sm: 1 }}>
          {children}
        </Grid>

        <Grid item xs={false} md={1} order={{ xs: 1, md: 2 }}></Grid>
        <Grid
          item
          xs={12}
          md={3}
          order={{ xs: 1, md: 2 }}
          //   sx={{ background: "#FFDD00" }}
        >
          <SpacerSection />
          {/* <DocumentationTabs /> */}
        </Grid>
      </Grid>
    </>
  );
}
