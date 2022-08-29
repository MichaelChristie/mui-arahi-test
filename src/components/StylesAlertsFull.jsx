import * as React from "react";
import { Box, Typography, Alert, AlertTitle } from "@mui/material/";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCheckCircle,
  faEye,
  faEllipsis,
  faHome,
  faTimes,
  faExclamationCircle,
} from "@fortawesome/pro-light-svg-icons";

export default function StylesAlertsFull() {
  return (
    <>
      <Alert
        severity="info"
        icon={<FontAwesomeIcon icon={faExclamationCircle} fontSize="large" />}
      >
        <AlertTitle>Not your Car?</AlertTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        ornare tortor ultrices, aliquet turpis nec, dignissim sem. Nam venenatis
        gravida lacus sit amet fermentum. <a href="/">Curabitur ut erat</a>{" "}
        elit.
      </Alert>
      <Box sx={{ mb: 2 }} />
      <Alert
        icon={<FontAwesomeIcon icon={faCheckCircle} fontSize="large" />}
        severity="success"
      >
        <AlertTitle>Success</AlertTitle>
        This is a success alert — check it out!
      </Alert>
      <Box sx={{ mb: 2 }} />
      <Alert
        icon={<FontAwesomeIcon icon={faCheckCircle} fontSize="large" />}
        severity="error"
      >
        <AlertTitle>Error</AlertTitle>
        This is a error alert — check it out!
      </Alert>
      <Box sx={{ mb: 2 }} />
      <Alert
        icon={<FontAwesomeIcon icon={faCheckCircle} fontSize="large" />}
        severity="warning"
      >
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — check it out!
      </Alert>
      <Box sx={{ mb: 2 }} />
    </>
  );
}
