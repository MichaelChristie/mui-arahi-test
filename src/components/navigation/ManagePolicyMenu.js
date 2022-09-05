import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
} from "@fortawesome/pro-light-svg-icons";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
// import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Cloud from "@mui/icons-material/Cloud";
import { Link } from "react-router-dom";

export default function ManagePolicyMenu() {
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
        id="Manage Policy"
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
        Manage Policy
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
          <MenuItem component={Link} to={"/grid"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faGrid} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Grid</ListItemText>
          </MenuItem>
          <MenuItem component={Link} to={"/documentation"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faBook} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Documentation</ListItemText>
          </MenuItem>
          <MenuItem component={Link} to={"/styles"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faPaintbrushPencil} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Styles</ListItemText>
          </MenuItem>
          <MenuItem component={Link} to={"/campaign"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faStars} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Campaign</ListItemText>
          </MenuItem>
          <MenuItem component={Link} to={"/playground"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faStars} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Playground</ListItemText>
          </MenuItem>
          <MenuItem component={Link} to={"/login"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faUserCircle} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Login</ListItemText>
          </MenuItem>

          <MenuItem component={Link} to={"/update-details"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faEdit} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Update details</ListItemText>
          </MenuItem>

          <Divider />

          <MenuItem component={Link} to={"/courses/search"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faSearch} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Search</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
