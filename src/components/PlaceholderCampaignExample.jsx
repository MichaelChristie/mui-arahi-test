import * as React from "react";
import { Grid, Box, Typography } from "@mui/material/";
import HeroImageXS from "../images/holiday_MD@2x.jpg";
import HeroImageSM from "../images/holiday_MD@2x.jpg";
import HeroImageMD from "../images/holiday_MD@2x.jpg";
import HeroImageLG from "../images/holiday_SM@2x.jpg";

export default function PlaceholderCampaignExample({ children }) {
  return (
    <>
      <Box
        sx={{
          p: 3,
          border: "1px dashed rgba(255,255,255,0.95)",
          //   background: "rgba(122,128,138,0.250)",
          height: "100%",
          width: "100%",
        }}
      >
        <Grid item container>
          <Grid item xs={8} lg={12}>
            <Box
              sx={{
                p: 3,
                height: {
                  xs: "90vh",
                  sm: "800px",
                  md: "480px",
                  lg: "480px",
                },
                width: "100%",
                // width: "780px",
                //   minHeight: "100%",
                //   maxWidth: "1920px",
                margin: "0 auto",
                borderRadius: "4px",
                backgroundImage: {
                  xs: `url(${HeroImageXS})`,
                  sm: `url(${HeroImageSM})`,
                  md: `url(${HeroImageMD})`,
                  lg: `url(${HeroImageLG})`,
                },

                backgroundSize: {
                  xs: "contain",
                  md: "cover",
                },
                backgroundRepeat: "no-repeat",

                backgroundPosition: "top center",
              }}
            >
              <Grid item container>
                <Grid item xs={6}>
                  <Typography
                    variant="h2"
                    fontSize={16}
                    sx={{ color: "#FFFFFF", fontSize: "16px !important" }}
                  >
                    Reason to trust #21
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{ color: "#FFFFFF", fontSize: "32px !important" }}
                  >
                    The time Judy's car was written off but the holiday wasn't
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  s
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
