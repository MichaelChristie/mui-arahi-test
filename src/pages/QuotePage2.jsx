import React, { useState } from "react";
import QuoteWrapper from "../components/QuoteWrapper";
import Typography from "@mui/material/Typography";
import { Button, Box, Grid } from "@mui/material";
import QuestionContainer from "../components/QuestionContainer";
import VertCentre from "../components/VertCentre";
import { Link } from "react-router-dom";
import TitleBar from "../components/TitleBar";

export default function QuotePage2() {
  return (
    <>
      <QuoteWrapper progress={50}>
        <TitleBar title={"Vehicle usage"} />
        <Box
          sx={{
            height: "100vh",
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
        What do you mostly use this car for?
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
              Business
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
              Personal
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
            <Link to="/quote">Back</Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link to="/quote3">
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
