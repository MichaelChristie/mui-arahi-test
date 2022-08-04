import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";
import Bokeh from "../components/Bokeh";
import PageLayout from "../components/PageLayout";
import PanelLayout from "../components/PanelLayout";
export default function Panel({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "flex-start",
        alignContent: "stretch",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          order: "1",
          flex: "1 0 auto",
          alignSelf: "stretch",
          // background: "rgba(50,120,0,0.5)",
        }}
      >
        Box 1
      </Box>
      <Box
        sx={{
          order: "2",
          flex: "0 0 auto",
          alignSelf: "stretch",
          // background: "rgba(255,120,0,0.25)",
        }}
      >
        <PanelLayout>
          <Box
            sx={{
              borderRadius: "32px 32px 0px 0px",
              p: 3,
              bgcolor: "background.paper",
            }}
          >
            {children}
          </Box>
        </PanelLayout>
      </Box>
    </Box>
  );
}
