import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MostTrustedCard() {
  const theme = useTheme();

  return (
    <Card
      variant="none"
      sx={{ display: "flex", mt: 2, background: "transparent" }}
    >
      <CardMedia
        component="img"
        sx={{ width: 120, height: 108, mt: 2 }}
        image="https://images.ctfassets.net/70piar1ns1oi/cZAcMhVLIidU3K9pJDFGD/7277f21b5ca880a0158a6e70d0848f8d/TBNZ2022_Winner_GeneralInsurance_2011-2022.png"
        alt="Image"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            We'll never stop working to earn your trust
          </Typography>
          <Typography variant="body" color="text.secondary" component="div">
            As voted by consumers 2011-2022 in the Reader's Digest Trusted Brand
            survey.
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
