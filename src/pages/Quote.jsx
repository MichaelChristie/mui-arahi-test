import * as React from "react";
import {
  Grid,
  Box,
  Button,
  Paper,
  Typography,
  Divider,
  Alert,
} from "@mui/material/";
import PageLayout from "../components/PageLayout";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Quote() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
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
      <List>
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
      <Divider />
      <List>
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
      </List>
    </Box>
  );

  return (
    <PageLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h1">Quote</Typography>
        <Typography variant="overline">Typography</Typography>
        <Divider />

        <div>
          {["left", "right", "top", "bottom"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>

        <Divider />

        <Typography variant="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ornare tortor ultrices, aliquet turpis nec, dignissim sem. Nam
          venenatis gravida lacus sit amet fermentum. Curabitur ut erat elit.
        </Typography>

        <Alert severity="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ornare tortor ultrices, aliquet turpis nec, dignissim sem. Nam
          venenatis gravida lacus sit amet fermentum. Curabitur ut erat elit.
        </Alert>
      </Box>
    </PageLayout>
  );
}
