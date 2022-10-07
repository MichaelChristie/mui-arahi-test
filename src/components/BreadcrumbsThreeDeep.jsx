import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

function handleClick1(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BreadcrumbsThreeDeep({ pageName, sectionOne }) {
  return (
    <div role="presentation" onClick={handleClick1}>
      <Box
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.5);",
          py: 1,
          px: 2,
          backdropFilter: "blur(10px)",
          //   backgorund: "rgba(255, 255, 255, 0.5);",
          borderRadius: 2,
          display: "inline-block",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="primary" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="primary"
            href="/material-ui/getting-started/installation/"
          >
            {sectionOne}
          </Link>
          <Typography color="text.primary">{pageName}</Typography>
        </Breadcrumbs>
      </Box>
    </div>
  );
}
