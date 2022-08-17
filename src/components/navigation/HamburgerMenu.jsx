import * as React from "react";
import { Grid, Container, Paper, Box } from "@mui/material/";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@mui/material/IconButton";
import {
  faBars,
  faScissors,
  faCircleUser,
  faClipboard,
} from "@fortawesome/pro-light-svg-icons";
import { Toolbar } from "@mui/material";
import PageLayout from "../PageLayout";
import ProductGrid from "../ProductGrid";
import MenuGrid from "./MenuGrid";

export default function HamburgerMenu() {
  const [state, setState] = React.useState({
    top: false,
    // left: false,
    // bottom: false,
    // right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "rgba(255, 255, 255, 0.90) !important",
        // backgroundColor: "#FFDD00",
        backdropFilter: "blur(10px)",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Toolbar />
      <PageLayout>
        <MenuGrid />
        <MenuGrid />
      </PageLayout>
    </Box>
  );

  return (
    <>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            size="medium"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FontAwesomeIcon
              icon={faBars}
              sx={{
                color: "#FFD400",
              }}
            />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}
