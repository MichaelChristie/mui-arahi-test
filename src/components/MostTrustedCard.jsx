import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Link, useHref } from "react-router-dom";

// import MostTrustedBadge from "../images/TBNZ2022_Winner_GeneralInsurance_2011.png";
// image = "url(../images/TBNZ2022_Winner_GeneralInsurance_2011-2022.png)";
// alt = "Winner_GeneralInsurance_2011-202";

export default function MostTrustedCard() {
  const theme = useTheme();

  return (
    <Card variant="none" sx={{ display: "flex", mt: 4 }}>
      <CardMedia
        component="img"
        sx={{ width: 120, height: 108, mt: 2 }}
        image="https://images.ctfassets.net/70piar1ns1oi/cZAcMhVLIidU3K9pJDFGD/7277f21b5ca880a0158a6e70d0848f8d/TBNZ2022_Winner_GeneralInsurance_2011-2022.png"
        alt="We'll never stop working to earn your trust"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            We'll never stop working to earn your trust
          </Typography>
          <Typography variant="body" color="text.secondary" component="div">
            As voted by consumers 2011-2022 in the Reader's Digest Trusted Brand
            survey.
            {/* <Link to="product/:motorcycle" color="primary">
              Find out more
            </Link> */}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
