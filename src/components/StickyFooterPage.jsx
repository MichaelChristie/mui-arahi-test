import * as React from "react";
import { Grid, Box } from "@mui/material/";
import PageLayout from "./PageLayout";

export default function StickyFooterPage({ children, footerContent }) {
  return (
    <>
      <Box
        sx={{
          display: "flex !important",
          flexDirection: "column !important",
          minHeight: "100vh !important",
          height: "100 !important",
          // background: "lime",
        }}
      >
        <Box className="content">{children}</Box>

        <footer className="footer">
          <PageLayout>{footerContent}</PageLayout>
        </footer>
      </Box>
    </>
    // <PageLayout>
    //   <Box>
    //     <h1>Claim </h1>
    //   </Box>
    // </PageLayout>
  );
}
