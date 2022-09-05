import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faScissors,
  faHome,
  faCircleUser,
  faClipboard,
  faBook,
  faSearch,
  faMotorcycle,
} from "@fortawesome/pro-light-svg-icons";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
// import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Cloud from "@mui/icons-material/Cloud";
import { Link } from "react-router-dom";
import NavMegaMenu from "./NavMegaMenu";

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
        id="Our Insurance"
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

      {/* <Link to="/quote">Quote</Link>
            <Box sx={{ width: "10px" }} />
            <Link to="/courses/search">Search</Link>
            <Box sx={{ width: "10px" }} />
            <Link to="/courses/list">Courses</Link>
            <Box sx={{ width: "10px" }} />
            <Link to="/product">Product</Link> */}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <NavMegaMenu />
        {/* <MenuList>
          <MenuItem component={Link} to={"/"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faHome} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </MenuItem>
          <MenuItem component={Link} to={"/product"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faScissors} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Products</ListItemText>
          </MenuItem>

          <MenuItem component={Link} to={"/courses/list"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faBook} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Courses</ListItemText>
          </MenuItem>

          <MenuItem component={Link} to={"/products/:motorcycle"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faMotorcycle} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Motorcycle</ListItemText>
          </MenuItem>

          <Divider />

          <MenuItem component={Link} to={"/courses/search"}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faSearch} fontSize="large" />
            </ListItemIcon>
            <ListItemText>Search</ListItemText>
          </MenuItem>
        </MenuList> */}
      </Menu>
    </>
  );
}
