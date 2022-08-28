import * as React from "react";
import QuoteWrapper from "../components/QuoteWrapper";
import Typography from "@mui/material/Typography";
import { Button, Box, Grid, ToggleButton } from "@mui/material";
import QuestionContainer from "../components/QuestionContainer";
import VertCentre from "../components/VertCentre";
import ToggleButtons from "../components/ToggleButtons";
import { Link } from "react-router-dom";
import RegoFinderTabs from "../components/RegoFinderTabs";
import RegoField from "../components/RegoField";
import BackNext from "../components/backNext";
// import ButtonGroup from "../components/ButtonGroup";

export default function QuotePage1() {
  return (
    <>
      <QuoteWrapper progress={1} footerContent={<></>}>
        <Typography variant="h1">Find your Car</Typography>
        <Box
          sx={
            {
              // height: "100vh",
              // background: "rgba(50,0,0,0.25)",
            }
          }
        >
          <QuestionContainer>
            <RegoFinderTabs tabOne={<RegoField />} tabTwo={<RegoField />} />
          </QuestionContainer>
        </Box>
      </QuoteWrapper>
    </>
  );
}
