import * as React from "react";
import { Grid, Box, Paper, Typography, Divider, Card } from "@mui/material/";
import ClaimMenu from "./navigation/ClaimMenu";
import ProductGridDropdownMenu from "./navigation/ProductGridDropdownMenu";
import SpacerSection from "./SpacerSection";

export default function CampaignProducts() {
  return (
    <>
      <Box sx={{ p: 0 }}>
        <Grid item container>
          <Grid item xs={6} md={3} lg={3} align="left" sx={{ mt: 4, p: 0 }}>
            <Box variant="oulined" sx={{ boxShadow: 0, p: 3 }}>
              <div className="icon circle-sm size-72 aai-icon-car"></div>
              <SpacerSection />
              <Typography variant="h5">Car</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit in
                quod fugiat nostrum laudantium, consequatur ad doloremque
                maiores! Nulla tempore iusto minima aliquam fugit quos
                voluptatum aperiam, nostrum labore doloremque?{" "}
              </Typography>
              <ul>
                <li>Lorem ipsum</li>
                <li>Dolor sit</li>
                <li>Dolor sit</li>
                <li>Dolor sit</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} lg={3} align="left" sx={{ mt: 4, p: 0 }}>
            <Box variant="oulined" sx={{ boxShadow: 0, p: 3 }}>
              <div className="icon circle-sm size-72 aai-icon-home"></div>
              <SpacerSection />
              <Typography variant="h5">Home</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit in
                quod fugiat nostrum laudantium, consequatur ad doloremque
                maiores! Nulla tempore iusto minima aliquam fugit quos
                voluptatum aperiam, nostrum labore doloremque?{" "}
              </Typography>
              <ul>
                <li>Lorem ipsum</li>
                <li>Dolor sit</li>
                <li>Dolor sit</li>
                <li>Dolor sit</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} lg={3} align="left" sx={{ mt: 4, p: 0 }}>
            <Box variant="oulined" sx={{ boxShadow: 0, p: 3 }}>
              <div className="icon circle-sm size-72 aai-icon-contents"></div>
              <SpacerSection />
              <Typography variant="h5">Contents</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit in
                quod fugiat nostrum laudantium, consequatur ad doloremque
                maiores! Nulla tempore iusto minima aliquam fugit quos
                voluptatum aperiam, nostrum labore doloremque?{" "}
              </Typography>
              <ul>
                <li>Lorem ipsum</li>
                <li>Dolor sit</li>
                <li>Dolor sit</li>
                <li>Dolor sit</li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} lg={3} align="left" sx={{ mt: 4, p: 0 }}>
            <Box variant="oulined" sx={{ boxShadow: 0, p: 3 }}>
              <div className="icon circle-sm size-72 aai-icon-small-business"></div>
              <SpacerSection />
              <Typography variant="h5">Small Business</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit in
                quod fugiat nostrum laudantium, consequatur ad doloremque
                maiores! Nulla tempore iusto minima aliquam fugit quos
                voluptatum aperiam, nostrum labore doloremque?{" "}
              </Typography>
              <ul>
                <li>Lorem ipsum</li>
                <li>Dolor sit</li>
                <li>Dolor sit</li>
                <li>Dolor sit</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
