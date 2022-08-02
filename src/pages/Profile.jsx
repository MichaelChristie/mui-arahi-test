import * as React from "react";
import Box from "@mui/material/Box";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

export default function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <Box sx={{ pt: 5 }}>
      <h1>Profile: {username}</h1>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(`/about`)}
      >
        Change to the about page
      </Button>
    </Box>
  );
}
