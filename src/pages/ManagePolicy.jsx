import * as React from "react";
import { Grid, Box } from "@mui/material/";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import PageLayout from "../components/PageLayout";

export default function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <PageLayout>
      <Box>
        <h1>Manage Policy: {username}</h1>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/about`)}
        >
          Change to the about page
        </Button>
      </Box>
    </PageLayout>
  );
}
