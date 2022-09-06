import * as React from "react";
import QuoteWrapper from "../components/QuoteWrapper";
import Typography from "@mui/material/Typography";
import { Button, Box, Grid, ToggleButton } from "@mui/material";
import QuestionContainer from "../components/QuestionContainer";
import VertCentre from "../components/VertCentre";
import ToggleButtons from "../components/ToggleButtons";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
// import ButtonGroup from "../components/ButtonGroup";
import TitleBar from "../components/TitleBar";
export default function QuotePage4() {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <>
      <QuoteWrapper progress={100}>
        <TitleBar title={"Your Quote"} />
        <Box
          sx={{
            height: "60vh",
            background: "#f1f1f1",
          }}
        >
          <VertCentre>
            {/* <QuestionContainer> */}
            <QuestionLockUp />
            <BackNext />
            {/* </QuestionContainer> */}
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
      <Box sx={{ display: { background: "#FFFFFF", width: "100%" } }}>
        {/* //DELETE THESE */}
        <Tabs
          // value={value}
          // onChange={handleChange}
          //   orientation="vertical"
          variant="scrollable"
          color="primary"
          // scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#FFD400",
            },
          }}
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Architecto eligendi" />
          <Tab label="Delectus rem reprehenderit rerum" />
          <Tab label="Architecto, eligendi sapiente" />
          <Tab label="Lorem ipsum consectetur adipisicing" />
          <Tab label="Delectus rerum nostrum quo ut ex" />
          <Tab label="Placeat natus" />
          <Tab label="Electus rem reprehenderit" />
        </Tabs>
      </Box>
      <Typography variant="h1" align="center">
        $59.65
      </Typography>
      <Typography variant="h5" align="center" sx={{ pb: 2 }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Typography>
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
