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
  faHandHoldingDollar,
  faArrowsRotate,
  faFile,
  faLifeRing,
} from "@fortawesome/pro-light-svg-icons";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
// import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import { Link } from "react-router-dom";

export default function Quicklinks() {
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
        variant="contained"
        color="grey"
        fullWidth
        id="Quick Links"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{}}
      >
        Quicklinks
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
          <MenuItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faArrowsRotate} fontSize="large" />
            </ListItemIcon>
            <ListItemText>
              <Link
                to="/myRoute"
                style={{ textDecoration: "none", display: "flex" }}
              >
                Pay / renew
              </Link>
            </ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faHandHoldingDollar} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Claim</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faFile} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Policy documents</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <FontAwesomeIcon icon={faLifeRing} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Help & FAQs</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
