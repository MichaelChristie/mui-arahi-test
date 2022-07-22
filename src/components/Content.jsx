import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import theme from "./ThemeArahi";
import MyButtons from "./MyButtons";
import MyContent from "./MyContent";
import BasicCard from "./Card";
import MyTypography from "./MyTypography";
import SimpleAccordion from "./Accordion";
import { ThemeProvider } from "@mui/material/styles";
import JsonPlayground from "./JsonPlayground";

export default function Content() {
  return (
    <ThemeProvider theme={theme}>
      {/* <JsonPlayground /> */}
      <BasicCard />
      <SimpleAccordion />
      <MyTypography />
      <MyButtons />
      <MyContent />
    </ThemeProvider>
  );
}
