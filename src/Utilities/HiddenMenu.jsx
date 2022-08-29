import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Switch, Button, Divider, IconButton } from "@mui/material/";
import Menu from "@mui/material/Menu";

import {
  faEye,
  faEllipsis,
  faHome,
  faTimes,
} from "@fortawesome/pro-light-svg-icons";

export default function HiddenMenu({ children }) {
  // USED FOR HIDING THE page controls in a menu

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <>
        <IconButton
          id="basic-button1"
          aria-label="open menu"
          aria-controls={open ? "basic-menu1" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 56,
            height: 56,
            // background: "#FF0000",
            right: 0,
            bottom: 0,
          }}
        >
          <FontAwesomeIcon icon={faEllipsis} fontSize="large" />
        </IconButton>
        <Menu
          id="basic-menu1"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {children}
        </Menu>
      </>
    </>
  );
}
