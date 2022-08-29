import * as React from "react";
import { AlertTitle, Button, Grid, Skeleton, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import RegoPlateLeft from "../images/regoPlateLeft.svg";
import RegoPlateRight from "../images/regoPlateRight.svg";
import RegoField from "./RegoField";
import { Alert } from "@mui/material";
import RegoCarResults from "./RegoCarResults";
import Playground from "./Playground";
import HeroMarketingMessage19 from "./HeroMarketingMessage19";
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
import Fade from "@mui/material/Fade";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import BackNext from "./backNext";
export default function RegoLookup() {
  const [checked, setChecked] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState("idle");
  const timerRef = React.useRef();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      setChecked((prev) => !prev);
    }
    if (query !== "idle") {
      setQuery("idle");
      return;
    }
    setQuery("progress");
    timerRef.current = window.setTimeout(() => {
      setChecked((prev) => !prev);
      setQuery("success");
    }, 2000);
  };

  return (
    <>
      {/* <Playground /> */}

      <Grid container direction="row">
        <Grid item container>
          <Grid item xs={9}>
            <RegoField />
          </Grid>
          <Grid item xs={3} sx={{ pl: 2 }}>
            <Button
              variant="contained"
              color="primary"
              aria-label="Find My Rego"
              //   onClick={handleChange}
              onClick={handleClickQuery}
              fullWidth
              sx={{ height: "100%" }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="large" />
            </Button>
            {/* <Button onClick={() => setChoice(!choice)}>Flip Choice</Button> */}
          </Grid>
        </Grid>
      </Grid>

      <>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? "800ms" : "0ms",
          }}
          unmountOnExit
        >
          <LinearProgress />
        </Fade>
        {query === "success" ? (
          <Collapse in={checked} collapsedSize={0}>
            <RegoCarResults />
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
            <Box sx={{ mb: 2 }} />

            <BackNext />
          </Collapse>
        ) : (
          <Fade
            in={query === "progress"}
            style={{
              transitionDelay: query === "progress" ? "400ms" : "0ms",
            }}
            unmountOnExit
          >
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <LinearProgress
                color="secondary"
                variant="indeterminate"
                sx={{ mt: 2, align: "center" }}
              />
              {/* <Typography variant="h1">
                <Skeleton />
              </Typography>

              <Typography variant="p">
                <Skeleton />
              </Typography>

              <Typography variant="p">
                <Skeleton />
              </Typography>

              <Typography variant="p">
                <Skeleton />
              </Typography>

              <Typography variant="p">
                <Skeleton />
              </Typography> */}
            </Box>
          </Fade>
        )}
      </>

      {/* <Playground /> */}
    </>
  );
}
