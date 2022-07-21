import * as React from "react";
import Typography from "@mui/material/Typography";
import theme from "./ThemeArahi";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function MyTypography() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
    </ThemeProvider>
  );
}
