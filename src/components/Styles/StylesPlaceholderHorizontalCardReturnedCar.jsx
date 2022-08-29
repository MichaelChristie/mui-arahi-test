import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PlaceholderImage from "../../images/placeholder_SQ@2x.png";
import { Divider } from "@mui/material";

export default function StylesPlaceholderHorizontalCardReturnedCar() {
  const theme = useTheme();

  return (
    <>
      <Card variant="elevation" sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ flex: "1 0 auto" }}>
          <CardContent>
            <Typography component="div" variant="h6">
              Kia Sportage LYC100
            </Typography>
            <Typography variant="body" color="text.secondary" component="div">
              Please select the specific model below
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ flex: "0 1 auto" }}>
          <CardMedia
            component="img"
            sx={{ width: 128 }}
            image={PlaceholderImage}
            alt="Placeholder"
          />
        </Box>
      </Card>
      <Divider />
    </>
  );
}
