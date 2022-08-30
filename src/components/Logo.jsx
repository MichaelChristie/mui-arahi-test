import * as React from "react";
import Box from "@mui/material/Box";
import BrandLogo from "../images/aa-insurance-logo-desktop-svg.svg";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <Link to="/">
        <Box
          component="img"
          sx={{
            background: "lime",
            width: 180,
            maxHeight: { xs: 56, md: 64, lg: 72, xl: 88 },
            maxWidth: { xs: 144, md: 144, lg: 148, xl: 180 },
            my: 1,
            transition: "all 0.5s ease",
          }}
          alt="AA Insurance"
          src={BrandLogo}
        />
      </Link>
    </>
  );
}
