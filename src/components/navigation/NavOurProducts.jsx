import * as React from "react";
import { Grid, Box, Paper, Typography, Divider } from "@mui/material/";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faScissors,
  faBook,
  faSearch,
  faHome,
  faMotorcycle,
  faUserCircle,
  faEdit,
} from "@fortawesome/pro-light-svg-icons";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";

export default function NavOurProducts() {
  return (
    <>
      <MenuList>
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
        <MenuItem component={Link} to={"/courses/search"}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faSearch} fontSize="large" />
          </ListItemIcon>
          <ListItemText>Search</ListItemText>
        </MenuItem>
      </MenuList>
    </>
  );
}
