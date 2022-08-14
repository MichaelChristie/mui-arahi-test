import * as React from "react";
import Box from "@mui/material/Box";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-light-svg-icons";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faScissors,
  faCircleUser,
  faClipboard,
} from "@fortawesome/pro-light-svg-icons";

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider /> */}
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}

      <ListItemButton>
        <ListItemIcon>
          <FontAwesomeIcon icon={faClipboard} fontSize="large" />
        </ListItemIcon>
        <ListItemText>
          <Link to="/">Home</Link>
        </ListItemText>
      </ListItemButton>
      <Divider />

      <ListItemButton>
        <ListItemIcon>
          <FontAwesomeIcon icon={faClipboard} fontSize="large" />
        </ListItemIcon>
        <ListItemText>
          <Link to="/product">Product</Link>
        </ListItemText>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <FontAwesomeIcon icon={faClipboard} fontSize="large" />
        </ListItemIcon>
        <ListItemText>
          <Link to="/courses/search">Course Search</Link>
        </ListItemText>
      </ListItemButton>
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
