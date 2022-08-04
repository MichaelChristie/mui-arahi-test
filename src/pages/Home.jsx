import * as React from "react";
import { Grid, Box, Button } from "@mui/material/";
import PageLayout from "../components/PageLayout";
import Content from "../components/Content";

export default function Home() {
  return (
    <PageLayout>
      <Box>Home</Box>
      <Button variant="contained" color="primary" sx={{ mr: 2 }}>
        This is a button
      </Button>
      <Button variant="contained" color="secondary">
        This is another button
      </Button>
      <Content />
    </PageLayout>
  );
}
