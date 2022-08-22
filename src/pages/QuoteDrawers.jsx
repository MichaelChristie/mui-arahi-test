import * as React from "react";
import {
  Grid,
  Box,
  Button,
  Paper,
  Typography,
  Divider,
  Alert,
  AppBar,
} from "@mui/material/";
import PageLayout from "../components/PageLayout";
import BokehHeader from "../components/BokehHeader";
import Logo from "../components/Logo";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Tabs from "../components/Tabs";
import Progress from "../components/Progress";
import LinearProgress from "../components/LinearProgress";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import PageSpacerMatchHeader from "../components/PageSpacerMatchHeader";
import HeaderQuote from "../components/HeaderQuote";
import QuoteProgress from "../components/QuoteProgress";

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
      <Toolbar />
      <HeaderQuote />

      {/* <BokehHeader /> */}
      {/* <PageSpacerMatchHeader /> */}

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
        <Tabs />
        <Typography variant="paragraph">
          1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
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
