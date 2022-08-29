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

export default function StylesAlertsWarning() {
  return (
    <>
      <Alert
        icon={<FontAwesomeIcon icon={faExclamationCircle} fontSize="large" />}
        severity="warning"
      >
        <AlertTitle>Warning</AlertTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        corrupti possimus deserunt, fugiat repellendus ea ut suscipit enim
        beatae ab voluptates accusantium! Quisquam illo animi, ipsam repudiandae
        molestiae accusantium hic!
      </Alert>
      <Box sx={{ mb: 2 }} />
    </>
  );
}
