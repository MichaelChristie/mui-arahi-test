import * as React from "react";
import { Grid, Box, Paper, Typography, Divider, Card } from "@mui/material/";
import ClaimMenu from "./navigation/ClaimMenu";
import ProductGridDropdownMenu from "./navigation/ProductGridDropdownMenu";

export default function CampaignProducts() {
  return (
    <>
      <Box sx={{ p: 3 }}>
        <Grid container direction="column">
          <Grid item container>
            <Grid item xs={6} md={3} lg={3} align="left" sx={{ mt: 4, p: 4 }}>
              <Box variant="oulined" sx={{ boxShadow: 1, p: 3 }}>
                <div className="icon circle-sm size-72 aai-icon-car"></div>
                <Typography variant="h6">Car</Typography>
                <Typography variant="p">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                  in quod fugiat nostrum laudantium, consequatur ad doloremque
                  maiores! Nulla tempore iusto minima aliquam fugit quos
                  voluptatum aperiam, nostrum labore doloremque?{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} lg={3} align="left" sx={{ mt: 4, p: 4 }}>
              <Box variant="oulined" sx={{ boxShadow: 1, p: 3 }}>
                <div className="icon circle-sm size-72 aai-icon-home"></div>
                <Typography variant="h6">Home</Typography>
                <Typography variant="p">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                  in quod fugiat nostrum laudantium, consequatur ad doloremque
                  maiores! Nulla tempore iusto minima aliquam fugit quos
                  voluptatum aperiam, nostrum labore doloremque?{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} lg={3} align="left" sx={{ mt: 4, p: 4 }}>
              <Box variant="oulined" sx={{ boxShadow: 1, p: 3 }}>
                <div className="icon circle-sm size-72 aai-icon-contents"></div>
                <Typography variant="h6">Contents</Typography>
                <Typography variant="p">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                  in quod fugiat nostrum laudantium, consequatur ad doloremque
                  maiores! Nulla tempore iusto minima aliquam fugit quos
                  voluptatum aperiam, nostrum labore doloremque?{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} lg={3} align="left" sx={{ mt: 4, p: 4 }}>
              <Box variant="oulined" sx={{ boxShadow: 1, p: 3 }}>
                <div className="icon circle-sm size-72 aai-icon-small-business"></div>
                <Typography variant="h6">Small Business</Typography>
                <Typography variant="p">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                  in quod fugiat nostrum laudantium, consequatur ad doloremque
                  maiores! Nulla tempore iusto minima aliquam fugit quos
                  voluptatum aperiam, nostrum labore doloremque?{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
