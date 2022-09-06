import * as React from "react";
import SpacerPage from "./SpacerPage";
import SpacerSection from "./SpacerSection";
import { Button, Box, Typography, Grid } from "@mui/material";

function QuestionContainer({ children }) {
  return (
    <>
      <Grid container columnSpacing={3} columns={8} className="showMe1">
        <Grid item xs={false} md={1} lg={2} className="showMe1"></Grid>
        <Grid item xs={12} md={6} lg={4} className="showMe1">
          <SpacerPage />
          {children}
        </Grid>
        <Grid item xs={false} md={1} lg={2} className="showMe1"></Grid>
      </Grid>
    </>
  );
}

export default QuestionContainer;
