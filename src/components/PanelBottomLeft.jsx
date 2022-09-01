import * as React from "react";
import { Box } from "@mui/material/";
import PanelLayout from "./PanelLayout";
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
          background: "rgba(50,120,0,0.5)",
        }}
      >
        {/* EXPANDS TO ALLOW THE PANEL TO STICK TO THE BOTTOM */}
      </Box>
      <Box
        sx={{
          order: "2",
          flex: "0 0 auto",
          alignSelf: "stretch",
          background: "rgba(255,120,0,0.25)",
          zIndex: 1,
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
