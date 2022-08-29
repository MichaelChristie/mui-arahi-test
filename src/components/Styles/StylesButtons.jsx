import { Button } from "@mui/material";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faPhone,
  faArrowRight,
  faCar,
  faHome,
  faKey,
  faLamp,
  faMoneyBill,
} from "@fortawesome/pro-light-svg-icons";

export default function StylesButtons() {
  return (
    <>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
        Selected
      </Button>
      <Button variant="contained" color="grey" sx={{ ml: 2 }}>
        Secondary
      </Button>
      <Button variant="text" color="primary" sx={{ ml: 2 }}>
        Text
      </Button>
    </>
  );
}
