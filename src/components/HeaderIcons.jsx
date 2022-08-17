import * as React from "react";
import AccountMenu from "./navigation/AccountMenu";
import LoginModal from "./navigation/LoginModal";
import PhoneModal from "./navigation/PhoneModal";
import HamburgerMenu from "./navigation/HamburgerMenu";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faPhone,
} from "@fortawesome/pro-light-svg-icons";
import IconButton from "@mui/material/IconButton";

export default function HeaderIcons() {
  return (
    <>
      <AccountMenu />
      <LoginModal />
      <PhoneModal />
      <HamburgerMenu />
      {/* <LoginModal /> */}
    </>
  );
}
