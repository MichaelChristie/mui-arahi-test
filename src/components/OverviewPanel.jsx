import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";

export default function OverviewPanel({ children }) {
  return (
    <Box sx={{ background: "rgba(0, 116, 194, 0.16)", p: 2 }}>
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={4}>
            <Typography sx={{ p: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ p: 2 }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ p: 2 }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={4}>
            <Typography sx={{ p: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ p: 2 }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ p: 2 }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
