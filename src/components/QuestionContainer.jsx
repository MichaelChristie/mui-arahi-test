import * as React from "react";

import { Button, Box, Typography, Grid } from "@mui/material";

function QuestionContainer({ children }) {
  return (
    <>
      <Grid container columns={12} className="showMe1">
        <Grid item xs={false} lg={2}></Grid>
        <Grid item xs={12} lg={8}>
          {children}
        </Grid>
        <Grid item xs={false} lg={2}></Grid>
      </Grid>
    </>
  );
}

export default QuestionContainer;
