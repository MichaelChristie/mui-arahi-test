import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";

export default function PlaceholderContent({ children }) {
  return (
    <>
      <Box
        sx={{
          p: 2,
          border: "1px dashed rgba(255,255,255,0.95)",
          background: "rgba(122,128,138,0.1250)",
          height: "100%",
        }}
      >
        <Grid item container>
          <Grid item xs={8} lg={8}>
            <Box sx={{ px: 0 }}>
              <Typography variant="h2" fontSize={24}>
                Put stuff here
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
