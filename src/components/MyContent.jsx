import * as React from "react";
import Typography from "@mui/material/Typography";
import { CssVarsProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import theme from "./ThemeArahi";
import MyButtons from "./MyButtons";
// import MyContent from "./MyContent";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Content() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>
        MyContent.jsx Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
      <Button variant="soft" color="info">
        Joy UI
      </Button>
    </ThemeProvider>
  );
}
