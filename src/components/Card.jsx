import * as React from "react";
import Grid from "@mui/material/Grid";
// import container from "@mui/material/Container";
// import Item from "@mui/material/Item";
// import { ThemeProvider } from "@mui/material/styles";

import CardImage from "./CardImage";

export default function BasicCard() {
  return (
    // <ThemeProvider>
    <Grid
      container
      rowSpacing={2}
      columnSpacing={2}
      sx={
        {
          // display: "grid",
          // gridTemplateRows: "repeat(1, 1fr)",
          // gridAutoFlow: "column",
        }
      }
    >
      <Grid item xs={12} sm={6} md={3}>
        <CardImage
          image="https://i.ibb.co/HXNYNkb/Wear-and-tear-768w.png"
          title="General wear & Tear"
          description="1UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. "
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardImage
          image="https://i.ibb.co/qgLBgBh/Get-in-touch-768w.png"
          title="Customer service centre"
          description="Although cards can support multiple actions, Lorem ipsum dolorLorem ipsum dolor UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. "
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardImage
          image="https://i.ibb.co/wNvb3LM/aai-policy-documents.jpg"
          title="Understanding your policy documents"
          description="UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. "
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardImage
          image="https://i.ibb.co/hmtBRM1/Toolbox-768w.png"
          title="Small Business Insurance"
          description="UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. "
        />
      </Grid>
    </Grid>
    // </ThemeProvider>
  );
}
