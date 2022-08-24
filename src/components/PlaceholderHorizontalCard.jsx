import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PlaceholderImage from "../images/placeholder128x128@2x.png";
export default function PlaceholderHorizontalCard() {
  const theme = useTheme();

  return (
    <Card variant="outlined" sx={{ display: "flex", mt: 4 }}>
      <CardMedia
        component="img"
        sx={{ width: 128 }}
        image={PlaceholderImage}
        alt="Placeholder"
      />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            Card Headline
          </Typography>
          <Typography variant="body" color="text.secondary" component="div">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam est
            aspernatur velit ipsum ex.
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
