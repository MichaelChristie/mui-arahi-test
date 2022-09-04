import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronDown,
  faHome,
  faFile,
  faStar,
} from "@fortawesome/pro-light-svg-icons";
import IconButton from "@mui/material/IconButton";
import LoginModal from "./LoginModal";

import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";

export default function AccountMenu() {
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
      <IconButton
        id="Account Menu"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="small"
        edge="start"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <LoginModal />
          </ListItemIcon>
          <ListItemText>Login</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to={"/register"}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faStar} fontSize="large" />
          </ListItemIcon>
          <ListItemText>Register</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faStar} fontSize="large" />
          </ListItemIcon>
          <ListItemText>My AA Insurance</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
