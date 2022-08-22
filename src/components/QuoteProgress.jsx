import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function QuoteProgress() {
  const [progress, setProgress] = React.useState(50);

  return (
    <Box sx={{ width: "100%", m: 0 }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        // value={50}
        sx={{ width: "100%" }}
      />
    </Box>
  );
}
