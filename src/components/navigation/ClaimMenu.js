import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MenuList from "@mui/material/MenuList";
// import MenuItem from "@mui/material/MenuItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faScissors,
  faBook,
  faPaintbrushPencil,
  faSearch,
  faUserCircle,
  faEdit,
  faStars,
  faGrid,
  faHome,
  faCar,
  faHandHoldingDollar,
  faLifeRing,
} from "@fortawesome/pro-light-svg-icons";

export default function ClaimMenu() {
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
        id="Claim Menu"
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
        Claim
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
        <MenuItem component={Link} to={"/claimcentre"}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faHandHoldingDollar} fontSize="large" />
          </ListItemIcon>
          <ListItemText>Claim Centre</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FontAwesomeIcon icon={faLifeRing} fontSize="large" />
          </ListItemIcon>
          <ListItemText>Claim FAQs</ListItemText>
        </MenuItem>
        <Divider />

        <MenuItem component={Link} to={"/playground"}>
          <Button variant="contained" color="primary">
            Start a claim
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
}
