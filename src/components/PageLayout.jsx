import * as React from "react";
import { Grid, Box } from "@mui/material/";
import PageMargin from "./pageMargin";

export default function PageLayout({ children }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
        }}
      >
        <Box
          className="showMe1"
          sx={{
            minWidth: {
              xs: "16px",
              sm: "24px",
              md: "24px",
              lg: "0px",
              xl: "0px",
            },
            backgroundColor: "lime !important",
            alignSelf: "center",
          }}
        />
        <Box
          sx={{
            flexGrow: 1,
            zIndex: 1,
            maxWidth: 1278,
            background: "transparent",
            margin: "0 auto;",
            alignSelf: "center",
          }}
        >
          {children}
        </Box>
        <Box
          className="showMe"
          sx={{
            minWidth: {
              xs: "16px",
              sm: "16px",
              md: "24px",
              lg: "0px",
              xl: "0px",
            },
          }}
        />
      </Box>

      {/* <PageMargin>
        <Grid
          container
          direction="column"
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1274,
            margin: "0 auto;",
          }}
        >
          <Grid item></Grid>
          <Grid item container>
            <Grid item xs={false} xl={1} className="showMe" />
            <Grid
              item
              xs={12}
              xl={10}
              sx={{ background: "lime", maxWidth: "1274px" }}
            >
              {children}
            </Grid>
            <Grid item xs={false} xl={1} className="showMe" />
          </Grid>
        </Grid>
      </PageMargin> */}
    </>
  );
}
