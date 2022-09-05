import * as React from "react";
import { Button, Box, Grid, Container, Typography } from "@mui/material/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownToLine } from "@fortawesome/pro-light-svg-icons";

import StylesAlertsWarning from "./Styles/StylesAlertsWarning";
import SpacerSection from "./SpacerSection";

export default function ProductPolicyDocumentSection() {
  return (
    <>
      <Button
        endIcon={<FontAwesomeIcon icon={faArrowDownToLine} />}
        variant="text"
        size="large"
        color="primary"
        sx={{ mr: 2 }}
      >
        Download as PDF
      </Button>
      <Button variant="text" size="large" color="primary" sx={{ mr: 2 }}>
        Certificate of currency
      </Button>
      <SpacerSection />

      <StylesAlertsWarning />
    </>
  );
}
