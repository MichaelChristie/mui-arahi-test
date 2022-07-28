import * as React from "react";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import theme from "./ThemeArahi";
// import TestButtons from "./TestButtons";
// import {
// Experimental_CssVarsProvider as CssVarsProvider,
// useColorScheme,
// } from "@mui/material/styles";
// import MyButtons from "./MyButtons";
// import MyContent from "./MyContent";
import BasicCard from "./Card";
// import MyTypography from "./MyTypography";
// import SimpleAccordion from "./Accordion";
// import { ThemeProvider } from "@mui/material/styles";
// import JsonPlayground from "./JsonPlayground";
// import experimental_extendTheme from "./CSSVarTheme";

export default function Content() {
  return (
    // TOGGLE THESE TWO TO SWITCH BETWEEN DEFAULT MATERIAL V ARAHI STYLES.
    // <CssVarsProvider theme={theme}>
    // REMOVE theme={theme} TO DEFAULT BACK TO MATERIAL STYLE

    <>
      <Box
        sx={{
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          mb: 2,
          class: "MyClass",
        }}
      >
        hi
      </Box>

      {/* <TestButtons /> */}
      <BasicCard />
      {/* <SimpleAccordion /> */}

      {/* <MyTypography /> */}
      {/* <MyContent /> */}
      {/* <JsonPlayground /> */}
      {/* <MyButtons /> */}

      <Typography>
        --color-base-green. Getting styles via variables from App.css
      </Typography>
    </>
  );
}
