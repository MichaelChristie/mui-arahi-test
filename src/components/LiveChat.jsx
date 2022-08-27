import * as React from "react";
import Box from "@mui/material/Box";
import { Chip, Avatar } from "@mui/material";

export default function LiveChat() {
  return;

  <Box
    sx={{
      // mr: 2,
      display: { xs: "block", md: "block" },
      // mb: 8,
      position: "fixed",
      right: "0px",
      top: "0px",
      zIndex: "111111111111111",
      background: "lime",
      width: "100px",
      height: "100px",
    }}
  >
    <Chip
      aria-label="open drawer"
      edge="start"
      color="primary"
      avatar={<Avatar>BBBBBB</Avatar>}
      label=""
      onClick={handleDrawerToggle}
    />
  </Box>;
}
