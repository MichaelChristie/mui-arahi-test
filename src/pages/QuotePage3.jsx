import * as React from "react";
import QuoteWrapper from "../components/QuoteWrapper";
import Typography from "@mui/material/Typography";
import { Button, Box, Grid, ToggleButton } from "@mui/material";
import QuestionContainer from "../components/QuestionContainer";
import VertCentre from "../components/VertCentre";
import ToggleButtons from "../components/ToggleButtons";
import { Link } from "react-router-dom";
// import ButtonGroup from "../components/ButtonGroup";

export default function QuotePage3() {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <>
      <QuoteWrapper progress={75}>
        <Typography variant="h1">Page 3</Typography>
        <Box
          sx={{
            height: "60vh",
            // background: "#FF0000"
          }}
        >
          <VertCentre>
            <QuestionContainer>
              <QuestionLockUp />
              <BackNext />
            </QuestionContainer>
          </VertCentre>
        </Box>
      </QuoteWrapper>
    </>
  );
}

function QuestionLockUp() {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <>
      <Typography variant="h5" align="center" sx={{ pb: 2 }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Typography>

      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={2} align="center" direction="row">
          <Grid item xs={12} sm={6}>
            <Button
              // onClick={handleClick}
              variant="contained"
              // color={flag ? "white" : "secondary"}
              color="grey"
              fullWidth
              size="large"
              // color={flag ? "white" : "secondary"}
            >
              Yes
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={handleClick}
              variant="contained"
              fullWidth
              size="large"
              color={flag ? "grey" : "secondary"}
            >
              No
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

function BackNext() {
  return (
    <>
      <Box sx={{ display: "flex", marginTop: 12 }}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={6} sx={{}}>
            <Link to="/quote2">Back</Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link to="/">
              <Button
                variant="contained"
                fullWidth
                color="primary"
                size="large"
              >
                Continue
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
