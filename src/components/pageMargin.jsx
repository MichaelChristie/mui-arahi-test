import * as React from "react";
import { Grid, Box, Paper, Typography, Divider } from "@mui/material/";
import ClaimMenu from "./navigation/ClaimMenu";
import { styled } from "@mui/material/styles";
import ProductGridDropdownMenu from "./navigation/ProductGridDropdownMenu";

export default function PageMargin({ children }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box
        sx={{
          px: {
            xs: 2, // how panels can ignore this margin
            sm: 2, // how panels can ignore this margin
            md: 2,
            lg: 3,
            xl: 0,
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}
