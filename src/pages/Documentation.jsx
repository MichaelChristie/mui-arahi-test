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
  faChevronDown,
  faArrowDownToLine,
} from "@fortawesome/pro-light-svg-icons";
import PageSpacer from "../components/SpacerPage";
import PageDocumentationLayout from "../components/PageDocumentationLayout";
import SpacerSection from "../components/SpacerSection";
// import Breadcrumbs from "../components/Breadcrumbs";

export default function Documentation() {
  return (
    <>
      <HeaderBrochure />

      <PageLayout>
        <Box sx={{ pt: 2 }}>
          {/* <Breadcrumbs /> */}
          <SpacerSection />

          <Typography variant="h1">
            Lorem ipsum dolor sit amet consectetur
          </Typography>
          {/* <Typography variant="overline">
            Architecto, eligendi sapiente
          </Typography> */}
          <SpacerSection />
          <Divider sx={{ height: 4 }} />
          <PageDocumentationLayout>
            <SpacerSection />
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
            {/* <Button
              variant="contained"
              size="large"
              color="secondary"
              sx={{ mr: 2 }}
            >
              Selected
            </Button> */}
            <SpacerSection />
            <Typography variant="h2">Architecto, eligendi sapiente</Typography>
            <SpacerSection />

            <Typography variant="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              rem reprehenderit rerum nostrum quo ut ex, placeat natus
              repellendus commodi sequi magnam expedita, iste similique soluta
              explicabo. Architecto, eligendi sapiente! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Delectus rem reprehenderit
              rerum nostrum quo ut ex, placeat natus repellendus commodi sequi
              magnam expedita, iste similique soluta explicabo. Architecto,
              eligendi sapiente! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus rem reprehenderit rerum nostrum quo ut
              ex, placeat natus repellendus commodi sequi magnam expedita, iste
              similique soluta explicabo. Architecto, eligendi sapiente! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Delectus rem
              reprehenderit rerum nostrum quo ut ex, placeat natus repellendus
              commodi sequi magnam expedita, iste similique soluta explicabo.
              Architecto, eligendi sapiente! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Delectus rem reprehenderit rerum
              nostrum quo ut ex, placeat natus repellendus commodi sequi magnam
              expedita, iste similique soluta explicabo. Architecto, eligendi
              sapiente!
            </Typography>
            <SpacerSection />
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
            <SpacerSection />

            <Typography variant="h3">
              Delectus rem reprehenderit rerum
            </Typography>
            <SpacerSection />
            <Typography variant="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              rem reprehenderit rerum nostrum quo ut ex, placeat natus
              repellendus commodi sequi magnam expedita, iste similique soluta
              explicabo. Architecto, eligendi sapiente! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Delectus rem reprehenderit
              rerum nostrum quo ut ex, placeat natus repellendus commodi sequi
              magnam expedita, iste similique soluta explicabo. Architecto,
              eligendi sapiente! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus rem reprehenderit rerum nostrum quo ut
              ex, placeat natus repellendus commodi sequi magnam expedita, iste
              similique soluta explicabo. Architecto, eligendi sapiente! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Delectus rem
              reprehenderit rerum nostrum quo ut ex, placeat natus repellendus
              commodi sequi magnam expedita, iste similique soluta explicabo.
              Architecto, eligendi sapiente! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Delectus rem reprehenderit rerum
              nostrum quo ut ex, placeat natus repellendus commodi sequi magnam
              expedita, iste similique soluta explicabo. Architecto, eligendi
              sapiente!
            </Typography>
            <PageSpacer />

            <Typography variant="h3">
              Lorem ipsum consectetur adipisicing
            </Typography>
            <SpacerSection />
            <Typography variant="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              rem reprehenderit rerum nostrum quo ut ex, placeat natus
              repellendus commodi sequi magnam expedita, iste similique soluta
              explicabo. Architecto, eligendi sapiente! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Delectus rem reprehenderit
              rerum nostrum quo ut ex, placeat natus repellendus commodi sequi
              magnam expedita, iste similique soluta explicabo. Architecto,
              eligendi sapiente! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus rem reprehenderit rerum nostrum quo ut
              ex, placeat natus repellendus commodi sequi magnam expedita, iste
              similique soluta explicabo. Architecto, eligendi sapiente! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Delectus rem
              reprehenderit rerum nostrum quo ut ex, placeat natus repellendus
              commodi sequi magnam expedita, iste similique soluta explicabo.
              Architecto, eligendi sapiente! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Delectus rem reprehenderit rerum
              nostrum quo ut ex, placeat natus repellendus commodi sequi magnam
              expedita, iste similique soluta explicabo. Architecto, eligendi
              sapiente!
            </Typography>
            <PageSpacer />
          </PageDocumentationLayout>
        </Box>
      </PageLayout>
    </>
  );
}
