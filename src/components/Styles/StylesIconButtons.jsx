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
  faCircleCheck,
  faChevronDown,
} from "@fortawesome/pro-light-svg-icons";

export default function StylesIconButtons() {
  return (
    <>
      <Button
        startIcon={<FontAwesomeIcon icon={faPhone} />}
        variant="contained"
        size="large"
      >
        Call
      </Button>
      <Button
        startIcon={<FontAwesomeIcon icon={faCircleCheck} />}
        variant="contained"
        size="large"
        color="secondary"
        sx={{ ml: 2 }}
      >
        Checked
      </Button>
      <Button
        endIcon={<FontAwesomeIcon icon={faChevronDown} />}
        variant="contained"
        size="large"
        color="grey"
        sx={{ ml: 2 }}
      >
        To:
      </Button>
      <Button
        endIcon={<FontAwesomeIcon icon={faChevronDown} />}
        variant="text"
        size="large"
        color="primary"
        sx={{ ml: 2 }}
      >
        Choose
      </Button>
    </>
  );
}
