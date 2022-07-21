import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardImage from "./CardImage";

import MyData from "../data/tokens.json";

console.log("tokens.json:");
console.log(MyData);

export default function JsonPlayground() {
  return (
    <ThemeProvider>
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                // bgcolor: "background.paper",
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                m: 2,
              }}
            >
              <Typography>Base: {MyData.global.base.value}</Typography>
              <Typography>1rem: {MyData.global.BaseRem.value}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
