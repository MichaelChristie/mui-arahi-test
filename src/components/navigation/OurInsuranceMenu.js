import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faScissors,
  faCircleUser,
  faClipboard,
} from "@fortawesome/pro-light-svg-icons";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
// import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Cloud from "@mui/icons-material/Cloud";
import { Link } from "react-router-dom";

export default function OurInsuranceMenu() {
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
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{
          fontFamily: "FSLola",
          fontWeight: 600,
          letterSpacing: -0.25,
          fontSize: 22,
          textTransform: "none",
          display: { xs: "none", lg: "inline-flex" },
          transition: "all 0.5s ease",
        }}
      >
        Our Insurance
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList>
          <Link to="/">
            <MenuItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faScissors} fontSize="large" />
              </ListItemIcon>
              <ListItemText>
                Home
                {/* <Link to="/product/motorcycle">Product</Link> */}
              </ListItemText>
            </MenuItem>
          </Link>
          <Link to="/product">
            <MenuItem>
              <ListItemIcon>
                <FontAwesomeIcon icon={faCircleUser} fontSize="large" />
              </ListItemIcon>
              <ListItemText>Product</ListItemText>
            </MenuItem>
          </Link>
          <MenuItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faClipboard} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Paste</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>Web Clipboard</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
