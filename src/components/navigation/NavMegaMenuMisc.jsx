import * as React from "react";
import {
  Grid,
  Box,
  Button,
  Paper,
  Typography,
  Divider,
  Alert,
  AlertTitle,
} from "@mui/material/";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faPhone,
  faArrowRight,
  faCar,
  faHome,
  faKey,
  faLamp,
  faMoneyBill,
  faScissors,
  faClipboard,
  faBook,
  faSearch,
  faMotorcycle,
} from "@fortawesome/pro-light-svg-icons";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";

import HeroImageSQ from "../../images/placeholder_SQ@2x.png";

export default function NavMegaMenuMisc() {
  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{ width: "800px", background: "transparent" }}
      >
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
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

                <Divider />

                <MenuItem component={Link} to={"/courses/search"}>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faSearch} fontSize="large" />
                  </ListItemIcon>
                  <ListItemText>Search</ListItemText>
                </MenuItem>
              </MenuList>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              height: "320px",
              backgroundImage: {
                xs: `url(${HeroImageSQ})`,
              },
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundPosition: "center center",
            }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
}
