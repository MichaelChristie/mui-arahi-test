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

export default function Documentation() {
  return (
    <>
      <HeaderBrochure />

      <PageLayout>
        <Box sx={{ p: 3 }}>
          <Typography variant="h1">Documentation</Typography>
          <Typography variant="overline">Typography</Typography>
          <Divider />

          <Typography variant="h1">Heading</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Typography variant="body2">body2</Typography>
          <Typography variant="body2">body1</Typography>
          <Typography variant="caption">caption</Typography>
          {/* <Typography variant="button">button</Typography> */}
          <Typography variant="subtitle1">subtitle1</Typography>
          <Typography variant="subtitle2">subtitle2</Typography>
          <Typography variant="overline">overline</Typography>
          <Typography variant="inherit">inherit</Typography>
          <Typography variant="paragraph">paragraph</Typography>
          {/* <Typography variant="xx">xx</Typography>
        <Typography variant="xx">xx</Typography>
        <Typography variant="xx">xx</Typography>
        <Typography variant="xx">xx</Typography>
        <Typography variant="xx">xx</Typography>
        <Typography variant="xx">xx</Typography>
        <Typography variant="xx">xx</Typography>
        <Typography variant="xx">xx</Typography>
        <Typography variant="xx">xx</Typography>
        <Typography variant="xx">xx</Typography>
        <Typography variant="xx">xx</Typography> */}
        </Box>
        <Divider />

        <Alert
          severity="info"
          icon={<FontAwesomeIcon icon={faExclamationCircle} fontSize="large" />}
        >
          <AlertTitle>Not your Car?</AlertTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ornare tortor ultrices, aliquet turpis nec, dignissim sem. Nam
          venenatis gravida lacus sit amet fermentum.{" "}
          <a href="/">Curabitur ut erat</a> elit.
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

        <Typography variant="h2">Policy detail</Typography>

        <Typography variant="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ornare tortor ultrices, aliquet turpis nec, dignissim sem. Nam
          venenatis gravida lacus sit amet fermentum. Curabitur ut erat elit.
        </Typography>

        <Alert severity="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ornare tortor ultrices, aliquet turpis nec, dignissim sem. Nam
          venenatis gravida lacus sit amet fermentum. Curabitur ut erat elit.
        </Alert>
      </PageLayout>
    </>
  );
}
