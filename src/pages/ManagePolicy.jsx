import * as React from "react";
import { Grid, Box } from "@mui/material/";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

export default function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <Box sx={{ pt: 5 }}>
      <Grid container direction="column">
        <Grid item></Grid>
        <Grid item container>
          <Grid item xs={false} lg={1} />
          <Grid item xs={12} lg={10}>
            <h1>Manage Policy: {username}</h1>

            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(`/about`)}
            >
              Change to the about page
            </Button>
          </Grid>
          <Grid item xs={false} lg={1} />
        </Grid>
      </Grid>
    </Box>
  );
}
