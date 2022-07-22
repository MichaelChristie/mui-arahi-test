import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import CardImage from "./CardImage";

export default function BasicCard() {
  return (
    <ThemeProvider>
      <Box
        component="ul"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          // flexWrap: "wrap",
          p: 0,
          m: 0,
        }}
      >
        <CardImage
          sx={{
            flex: "0 1 auto",
            width: "25%",
          }}
          image="https://i.ibb.co/qgLBgBh/Get-in-touch-768w.png"
          title="Games Console"
          description="Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. "
        />
        <CardImage
          sx={{
            flex: "0 1 auto",
            width: "25%",
          }}
          image="https://i.ibb.co/HXNYNkb/Wear-and-tear-768w.png"
          title="Wear &amp; Tear"
          description="1UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. "
        />
        <CardImage
          sx={{
            flex: "0 1 auto",
            width: "25%",
          }}
          image="https://i.ibb.co/wNvb3LM/aai-policy-documents.jpg"
          title="Policy documents"
          description="UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. "
        />
        <CardImage
          sx={{
            flex: "0 1 auto",
            width: "25%",
          }}
          image="https://i.ibb.co/hmtBRM1/Toolbox-768w.png"
          title="Small Business Insurance"
          description="UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information. "
        />
      </Box>
      <Box
        component="div"
        sx={{
          p: 1,
        }}
      ></Box>
    </ThemeProvider>
  );
}
