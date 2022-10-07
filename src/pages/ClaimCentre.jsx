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
  Breadcrumbs,
  Toolbar,
  CardMedia,
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
} from "@fortawesome/pro-solid-svg-icons";
import PageSpacer from "../components/SpacerPage";
import PageDocumentationLayout from "../components/PageDocumentationLayout";
import SpacerSection from "../components/SpacerSection";
import BreadcrumbsThreeDeep from "../components/BreadcrumbsThreeDeep";
import SpacerPage from "../components/SpacerPage";
// import Breadcrumbs from "../components/Breadcrumbs";
import HeroImageXS from "../images/claims-image.jpg";

export default function ClaimCentre() {
  return (
    <>
      <HeaderBrochure />

      <PageLayout>
        <Box sx={{ pt: 2 }}>
          <BreadcrumbsThreeDeep
            pageName={"Claims Centre"}
            sectionOne={"Insurance"}
          />
          <SpacerSection />
          <Typography variant="h1">Claims Centre</Typography>
          {/* <Typography variant="overline">
            Architecto, eligendi sapiente
          </Typography> */}
          <SpacerSection />
          <Divider sx={{ height: 4 }} />
          <PageDocumentationLayout>
            <SpacerSection />
            <Button
              //   endIcon={<FontAwesomeIcon icon={faArrowDownToLine} />}
              variant="contained"
              size="large"
              color="primary"
              sx={{ mr: 2 }}
              aria-label="Start a claim online or over the phone"
            >
              Start a claim
            </Button>
            <Button
              variant="text"
              size="large"
              color="primary"
              aria-label="Track an existing claim online or talking to one of us"
              sx={{ mr: 2 }}
            >
              Existing claim
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
            <Divider sx={{ height: 4 }} />
            <SpacerSection />
            <Alert
              severity="info"
              icon={
                <FontAwesomeIcon icon={faExclamationCircle} fontSize="large" />
              }
            >
              <AlertTitle variant="h6">
                <strong>Important info - Are you OK?</strong>
              </AlertTitle>
              If you have been in an accident, first make sure you and everyone
              are OK. If someone is hurt or in danger, first call{" "}
              <a href="/" aria-label="Emergency service numbers">
                emergency services
              </a>{" "}
              and we can sort your claim later. If your home is unhabitable
              please call us immediately on{" "}
              <a
                href="0800 500 216"
                aria-label="AA Insurance Claims Assistance"
              >
                0800 500 216
              </a>{" "}
              so we can help.
            </Alert>
            <SpacerSection />
            <Typography variant="h2">First things to check</Typography>

            <Typography variant="paragraph">
              Whether you’ve been in a car accident, had your home burgled or
              damaged, making a claim with us is simple. You can{" "}
              <a href="https://www.aainsurance.co.nz/login">
                report your claim online
              </a>
              , and someone from our team will get in touch within two working
              days, or at a time that suits you.{" "}
            </Typography>

            <Typography variant="paragraph">
              If your claim is urgent, simply call us on{" "}
              <a href="0800 500 216">0800 500 216</a>.
            </Typography>
            <SpacerSection />
            <CardMedia
              component="img"
              height="480"
              image="https://i.ibb.co/2SJc38h/claims-image.jpg"
              alt="A woman puts a reassuring arm around a man sitting at his laptop computer"
              aria-label="A woman puts a reassuring arm around a man sitting at his laptop computer"
              sx={{
                order: "0",
                flex: "0 1 auto",
                alignSelf: "stretch",
                // backgroundImage: {
                //   xs: `url(${HeroImageXS})`,
                //   sm: `url(${HeroImageXS})`,
                //   md: `url(${HeroImageXS})`,
                //   lg: `url(${HeroImageXS})`,
                // },
                borderRadius: "8px",
              }}
            />

            <SpacerPage />
            <SpacerSection />
            <Typography variant="h3">More information</Typography>
            <Divider sx={{ height: 4 }} />
            <SpacerPage />

            <Typography variant="h4">Car Claims</Typography>
            {/* <SpacerSection /> */}
            <Typography variant="paragraph">
              If your car is written off we'll pay the Agreed Value listed in
              your policy, so there are no surprises. With our network of
              quality repairers, we can guarantee repairs for the life of the
              car - even if you sell it.
              <br />
              <a href="https://www.aainsurance.co.nz/claims/car-insurance-claims">
                More info on car insurance claims
              </a>
            </Typography>
            <PageSpacer />

            <Typography variant="h4">Contents Claims</Typography>
            {/* <SpacerSection /> */}
            <Typography variant="paragraph">
              If your laptop is accidentally damaged, we'll arrange to have it
              checked to see if it can be repaired. If not, we'll replace it
              with the nearest equivalent item or, where this isn't available,
              pay the market value.
              <br />
              <a href="https://www.aainsurance.co.nz/claims/contents-insurance-claims">
                More info on contents insurance claims
              </a>
            </Typography>
            <PageSpacer />

            <Typography variant="h4">Home Claims</Typography>
            {/* <SpacerSection /> */}
            <Typography variant="paragraph">
              If you can't live in your damaged home, we'll arrange for
              temporary accommodation for you and your family while your home is
              being repaired or rebuilt.
              <br />
              <a href="https://www.aainsurance.co.nz/claims/car-insurance-claims">
                More info on home insurance claims
              </a>
            </Typography>
            <PageSpacer />

            <SpacerPage />
            <SpacerSection />
            <Typography variant="h3">Excesses</Typography>
            <Divider sx={{ height: 4 }} />
            <SpacerPage />
          </PageDocumentationLayout>
        </Box>
      </PageLayout>
    </>
  );
}
