import * as React from "react";
import Button from "@mui/material/Button";
import { Box, Switch } from "@mui/material/";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { faCircleUser } from "@fortawesome/pro-light-svg-icons";
import IconButton from "@mui/material/IconButton";
export default function ThemeSwitcher() {
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
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="medium"
        edge="start"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <FontAwesomeIcon icon={faCircleUser} />
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
        <MenuItem onClick={handleClose}>
          <Button variant="contained" fullWidth color="primary">
            Log in
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>Register</MenuItem>
        <MenuItem onClick={handleClose}>My AA Insurance</MenuItem>
      </Menu>
    </>
  );
}
