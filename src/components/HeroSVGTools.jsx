import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";
import HeroImageXS from "../images/tool-set.svg";
import HeroImageSM from "../images/tool-set.svg";
import HeroImageMD from "../images/tool-set.svg";
import HeroImageLG from "../images/tool-set.svg";

import AddPromoCode from "./AddPromoCode";
import { Link } from "react-router-dom";
import HeroAnimatedBalloons from "./HeroAnimatedBaloons";

export default function HeroSVGTools() {
  return (
    <>
      <HeroAnimatedBalloons />
      <Box sx={{ background: "rgba(50,120,150,0.00)", zIndex: 1, p: 6 }}>
        <Box
          component="img"
          sx={{
            height: 280,
            width: "100%",
            maxHeight: { xs: 280, md: 280 },
            // maxWidth: { xs: 350, md: 250 },
            // background: "tomato",
          }}
          alt="Tools"
          src={HeroImageLG}
        />
        <Box>
          <Typography variant="h2" component="h1">
            Grab a $50 Prezzy card from NZ's Most Trusted General Insurer
          </Typography>
          <Typography variant="p">
            Get your with every new Home, Car, Contents or Small Business
            policy. Offer ends 11 August 2022.{"  "}
            <Link to="/">Terms and Conditions</Link>
          </Typography>
          <AddPromoCode />
        </Box>
      </Box>
    </>
  );
}
