import * as React from "react";
import { Grid, Box } from "@mui/material/";
import PageMargin from "./pageMargin";

export default function PageLayoutBreakout({ children }) {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            position: "relative",
            flexGrow: 1,
            zIndex: 1,
            maxWidth: 1494,
            background: "transparent",
            margin: "0 auto;",
          }}
        >
          {children}
        </Box>
      </Box>

      {/* <PageMargin>
        <Grid
          container
          direction="column"
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1872, // Skinnier than maxWidth: 1920, Is equal to 1 column extra without a margin
            margin: "0 auto;",
          }}
        >
          <Grid item xs={12} xl={10}>
            {children}
          </Grid>
        </Grid>
      </PageMargin> */}
    </>
  );
}
