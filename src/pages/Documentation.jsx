import * as React from "react";
import {
  Grid,
  Box,
  Button,
  Paper,
  Typography,
  Divider,
  Alert,
  AlertTitle,
} from "@mui/material/";

import PageLayout from "../components/PageLayout";
import HeaderBrochure from "../components/HeaderBrochure";
import zIndex from "@mui/material/styles/zIndex";
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
import PageSpacer from "../components/SpacerPage";

export default function Documentation() {
  return (
    <>
      <HeaderBrochure />

      <PageLayout>
        <Box sx={{ p: 3 }}>
          <Typography variant="h1">Documentation</Typography>
          <Typography variant="overline">Typography</Typography>
          <Divider />
          <PageSpacer />
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            rem reprehenderit rerum nostrum quo ut ex, placeat natus repellendus
            commodi sequi magnam expedita, iste similique soluta explicabo.
            Architecto, eligendi sapiente! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Delectus rem reprehenderit rerum
            nostrum quo ut ex, placeat natus repellendus commodi sequi magnam
            expedita, iste similique soluta explicabo. Architecto, eligendi
            sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus rem reprehenderit rerum nostrum quo ut ex, placeat natus
            repellendus commodi sequi magnam expedita, iste similique soluta
            explicabo. Architecto, eligendi sapiente! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Delectus rem reprehenderit rerum
            nostrum quo ut ex, placeat natus repellendus commodi sequi magnam
            expedita, iste similique soluta explicabo. Architecto, eligendi
            sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus rem reprehenderit rerum nostrum quo ut ex, placeat natus
            repellendus commodi sequi magnam expedita, iste similique soluta
            explicabo. Architecto, eligendi sapiente!
          </Typography>
          <PageSpacer />
          <Alert
            severity="info"
            icon={
              <FontAwesomeIcon icon={faExclamationCircle} fontSize="large" />
            }
          >
            <AlertTitle>Not your Car?</AlertTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ornare tortor ultrices, aliquet turpis nec, dignissim
            sem. Nam venenatis gravida lacus sit amet fermentum.{" "}
            <a href="/">Curabitur ut erat</a> elit.
          </Alert>
          <PageSpacer />
        </Box>
      </PageLayout>
    </>
  );
}
