import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";

export default function PlaceholderContent({ children }) {
  return (
    <>
      <Box
        sx={{
          p: {
            xs: 0,
            lg: 1,
          },
          border: "2px dashed rgba(122,128,138,0.95)",
          background: "rgba(122,128,138,0.50)",
          height: "100%",
        }}
      >
        <Grid item container>
          <Grid item xs={8} lg={8}>
            <Box sx={{ px: 2, pt: 2 }}>
              <Typography variant="h2" fontSize={24}>
                Custom content
              </Typography>
              <Typography variant="h1" fontSize={36}>
                Placeholder
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
