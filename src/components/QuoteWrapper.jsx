import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Grid, InputAdornment, TextField } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HeaderQuote from "./HeaderQuote";
import { Chip, Avatar } from "@mui/material";
import PageLayout from "./PageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Visibility from "@mui/icons-material/Visibility";
import { faTimes, faSearch } from "@fortawesome/pro-light-svg-icons";
import { VisibilityOff } from "@mui/icons-material";
import MiniHelpCentre from "./MiniHelpCentre";
import LoginForm from "./LoginForm";
import StickyFooterPage from "./StickyFooterPage";
import HeroMarketingMessage from "./HeroMarketingMessage19";
import MenuGrid from "./navigation/MenuGrid";
import BackNext from "./backNext";
import SpacerPage from "./SpacerPage";
import SpacerSection from "./SpacerSection";
const drawerWidth = 400;

// function ResponsiveDrawer(props) {
export default function QuoteWrapper({ progress, children, ...props }) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ mt: 4, p: 0 }} />
      <Box sx={{ px: 3 }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">Help Centre</Typography>
          </Box>
          <Box>
            <IconButton
              // color="inherit"
              aria-label="close drawer"
              // edge="start"
              onClick={handleDrawerToggle}
              sx={{ mt: -1, display: { sm: "none" }, width: 48, height: 48 }}
            >
              <FontAwesomeIcon icon={faTimes} fontSize="x-large" />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ mb: 3 }}></Box>

        <MiniHelpCentre />
        {/* <LoginForm /> */}
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <StickyFooterPage footerContent={<></>}>
      {/* ADD <BACKNEXT /> TO FOOTER CONTENT WHEN EVENTS CAN BE PASSED BETWEEN COMPONENTS */}
      <SpacerSection />

      {/* <Toolbar /> */}

      <HeaderQuote progress={progress} />
      <CssBaseline />
      <PageLayout>
        <Grid container direction="column" sx={{ background: "transparent" }}>
          <Grid container item columnSpacing={3}>
            <Grid item xs={12} md={8} xl={8} className="showMe1">
              <Toolbar />
              {/* <Divider /> */}
              {children}
            </Grid>
            <Grid item xs={false} md={4} xl={4} className="showMe1">
              <Box
                sx={{
                  mr: 2,
                  mb: 8,
                  display: { xs: "block", md: "none" },
                  position: "fixed",
                  right: "0",
                  bottom: "0",
                }}
              >
                <Chip
                  aria-label="open drawer"
                  edge="start"
                  color="primary"
                  avatar={<Avatar>A</Avatar>}
                  label="Help Centre and Chat"
                  onClick={handleDrawerToggle}
                />
              </Box>
              <></>
              <Box
                // HELP CENTRE DRAWER!!!
                component="nav"
                sx={{
                  // width: { md: drawerWidth },
                  flexShrink: { sm: 0 },
                  // background: "rgba(50, 150, 150, 0.5)",
                }}
                aria-label="Help Centre"
              >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Toolbar />
                <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  anchor="right"
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                      backdropFilter: "blur(15px)",
                      background: "rgba(255, 255, 255, 0.90);", //Fix for dark theme
                    },
                  }}
                >
                  {drawer}
                </Drawer>
                <Box
                  variant="permanent"
                  // anchor="right"
                  sx={{
                    display: { xs: "none", md: "block" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      // width: drawerWidth,
                    },
                  }}
                  open
                >
                  {drawer}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </PageLayout>
    </StickyFooterPage>
  );
}
