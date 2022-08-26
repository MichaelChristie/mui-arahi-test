import * as React from "react";
// import { useRef } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Button, Grid, TextField } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import RegoPlateScrews from "../images/regoPlateScrews.svg";
// import RegoPlateSM from "../images/regoPlateScrews.svg";
// import RegoPlateMD from "../images/regoPlateScrews.svg";
import RegoPlateLeft from "../images/regoPlateLeft.svg";
import RegoPlateRight from "../images/regoPlateRight.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/pro-light-svg-icons";

export default function RegoField() {
  return (
    <>
      <Grid container direction="row">
        <Grid item container>
          <Grid item xs={9}>
            <Box
              sx={{
                backgroundImage: {
                  xs: `url(${RegoPlateRight})`,
                },
                boxShadow: 2,
                backgroundSize: "contain",
                backgroundPositionX: "right",
                backgroundRepeat: "no-repeat",
                verticalAlign: "middle",
                backgroundColor: "bacground.paper",
                borderRadius: 2,
                // border: "4px solid rgba(0,0,0,0.75)",
              }}
            >
              <Box
                sx={{
                  backgroundImage: {
                    xs: `url(${RegoPlateLeft})`,
                  },
                  backgroundSize: "contain",
                  backgroundPositionX: "left",
                  backgroundRepeat: "no-repeat",
                  verticalAlign: "middle",
                  borderRadius: 2,
                }}
              >
                <TextField
                  id="filled-basic"
                  fullWidth
                  onClick={console.log("clicked")}
                  placeholder="MYREGO"
                  variant="standard"
                  autoFocus={true}
                  color="secondary"
                  inputProps={{
                    style: {
                      fontSize: 72,
                      textAlign: "center",
                      fontWeight: 100,
                      fontFamily: "FS Lola, Arial Black",
                      color: "rgba(0,0,0,0.75)",
                      textTransform: "uppercase",
                      height: "80px",
                      backgroundColor: "transparent",
                      borderRadius: 2,
                    },
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ pl: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ height: "100%" }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="large" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
