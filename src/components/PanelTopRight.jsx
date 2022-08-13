import * as React from "react";
import { Box } from "@mui/material/";
import HomeCTAPanelLayout from "./HomeCTAPanelLayout";
export default function PanelTopRight({ children }) {
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
          order: {
            xs: 1,
            lg: 2,
          },
          flex: "1 0 auto",
          alignSelf: "stretch",
          // background: "rgba(50,120,0,0.5)",
        }}
      >
        {/* EXPANDS TO ALLOW THE PANEL TO STICK TO THE BOTTOM */}
      </Box>
      <Box
        sx={{
          order: {
            xs: 2,
            lg: 1,
          },
          flex: "0 0 auto",
          alignSelf: "stretch",
          // background: "rgba(255,120,0,0.25)",
          zIndex: 1,
        }}
      >
        <HomeCTAPanelLayout>
          {/* // Change attributes for sm, xs */}
          <Box
            sx={{
              borderRadius: {
                xs: "32px 32px 0px 0px",
                lg: "0px 0px 32px 32px",
              },

              p: {
                xs: 2,
                lg: 6,
              },
              bgcolor: "background.paper",
            }}
          >
            {children}
          </Box>
        </HomeCTAPanelLayout>
      </Box>
    </Box>
  );
}
