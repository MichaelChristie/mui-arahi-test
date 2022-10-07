import * as React from "react";
import { Button, Grid, TextField } from "@mui/material";

import Box from "@mui/material/Box";
import RegoPlateLeft from "../images/regoPlateLeft.svg";
import RegoPlateRight from "../images/regoPlateRight.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/pro-light-svg-icons";

export default function RegoField({ buttonAction }) {
  return (
    <>
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
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          width: "100%",
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
            placeholder="MYREG"
            // value="LYC100"
            variant="standard"
            autoFocus={true}
            color="secondary"
            autoComplete="off"
            inputProps={{
              style: {
                fontSize: 64,
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
    </>
  );
}
