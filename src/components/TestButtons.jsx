import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LightAndDarkMode from "./LightAndDarkMode-controls1";

export default function TestButtons() {
  return (
    <div id="css-vars-custom-themeDELETRE">
      <Box bgcolor="background.paper" sx={{ p: 1 }}>
        <Box sx={{ py: 2, mx: "auto" }}>
          <Box sx={{ pb: 4 }}>
            {/* <ColorSchemePicker /> */}
            <LightAndDarkMode />
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
            <Button variant="contained">Text</Button>
            <Button variant="outlined">Text</Button>
            <Button>Text</Button>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
            <Button color="secondary" variant="contained">
              Text
            </Button>
            <Button color="secondary" variant="outlined">
              Text
            </Button>
            <Button color="secondary">Text</Button>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
            <Button color="error" variant="contained">
              Text
            </Button>
            <Button color="error" variant="outlined">
              Text
            </Button>
            <Button color="error">Text</Button>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
            <Button color="info" variant="contained">
              Text
            </Button>
            <Button color="info" variant="outlined">
              Text
            </Button>
            <Button color="info">Text</Button>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
            <Button color="warning" variant="contained">
              Text
            </Button>
            <Button color="warning" variant="outlined">
              Text
            </Button>
            <Button color="warning">Text</Button>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
            <Button color="success" variant="contained">
              Text
            </Button>
            <Button color="success" variant="outlined">
              Text
            </Button>
            <Button color="success">Text</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
