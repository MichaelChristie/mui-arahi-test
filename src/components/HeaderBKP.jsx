import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "../images/aa-insurance-logo-desktop-svg.svg";
import backgroundImage from "../images/bokeh-clean_v1.7.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import Bokeh from "../images/circle.svg";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "./ThemeArahi";
import { ThemeProvider } from "@mui/material/styles";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faPhone,
} from "@fortawesome/pro-light-svg-icons";
// import ManagePolicyMenu from "./ManagePolicyMenu";

// import {
//   faBars,
//   faCircleUser,
//   faXmark,
// } from "@fortawesome/pro-solid-svg-icons";

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" color="primary" sx={{ background: "white" }}>
          <Grid item container>
            <Grid item xs={false} lg={1} />
            <Grid item xs={12} lg={10}>
              <Toolbar>
                <Box
                  component="div"
                  sx={{
                    height: 0,
                    width: 0,
                    // background: "lime",
                  }}
                >
                  <Box
                    sx={{
                      height: 96,
                      width: 2400,
                      position: "absolute",
                      // border: "1px solid #f1f1f1",
                      top: 0,
                      left: -400,
                      zIndex: -10000,
                      maxHeight: { xs: 64, md: 96 },
                      // maxWidth: { xs: 200, md: 800 },
                      opacity: "1",
                      backgroundImage: `url(${backgroundImage})`,
                      backgroundRepeat: "no-repeat",
                      // backgroundColor: "red",
                      backgroundSize: "1200px",
                      backgroundPositionY: -480,
                      backgroundPositionX: -200,
                      // backgroundColor: red,
                    }}
                  />
                </Box>

                <Box
                  component="img"
                  sx={{
                    height: 64,
                    width: 180,
                    maxHeight: { xs: 32, lg: 48, xl: 64 },
                    maxWidth: { xs: 90, lg: 120, xl: 180 },
                    my: 2,
                    transition: "all 0.5s ease",
                  }}
                  alt="AA Insurance"
                  src={Logo}
                />

                <Typography component="div" sx={{ flexGrow: 0, ml: 1, mt: 1 }}>
                  <Button
                    endIcon={<ExpandMoreIcon />}
                    color="inherit"
                    size="large"
                    sx={{
                      fontFamily: "FSLola",
                      fontWeight: 600,
                      letterSpacing: -0.25,
                      fontSize: 22,
                      // backgroundImage:
                      //   "linear-gradient(90deg,#428bca 0,#428bca 50%,#042a49)",
                    }}
                  >
                    Our Insurance
                  </Button>
                </Typography>
                <Typography component="div" sx={{ flexGrow: 0, ml: 1, mt: 1 }}>
                  <Button
                    endIcon={<ExpandMoreIcon />}
                    color="inherit"
                    size="large"
                    sx={{
                      fontFamily: "FSLola",
                      fontWeight: 600,
                      letterSpacing: -0.25,
                      fontSize: 22,
                      // backgroundImage:
                      //   "linear-gradient(90deg,#428bca 0,#428bca 50%,#042a49)",
                    }}
                  >
                    Manage Policy
                  </Button>
                </Typography>
                <Typography component="div" sx={{ flexGrow: 1, ml: 1, mt: 1 }}>
                  <Button
                    endIcon={<ExpandMoreIcon />}
                    color="inherit"
                    size="large"
                    sx={{
                      fontFamily: "FSLola",
                      fontWeight: 600,
                      letterSpacing: -0.25,
                      fontSize: 22,
                      // backgroundImage:
                      //   "linear-gradient(90deg,#428bca 0,#428bca 50%,#042a49)",
                    }}
                  >
                    Claim
                  </Button>
                </Typography>
                {/* <ManagePolicyMenu /> */}

                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  {/* <ColorSchemePicker /> */}
                </IconButton>

                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <FontAwesomeIcon icon={["fal", "faBars"]} />
                </IconButton>
                <Button color="inherit" sx={{ mr: 1 }}>
                  Help &amp; Contact
                </Button>

                <IconButton
                  size="medium"
                  edge="start"
                  color="neutral"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <FontAwesomeIcon icon={faCircleUser} />
                </IconButton>
                <IconButton
                  size="medium"
                  edge="start"
                  color="neutral"
                  aria-label="My AA Insurance account"
                  sx={{ mr: 2 }}
                >
                  <FontAwesomeIcon icon={faPhone} />
                </IconButton>
                <IconButton
                  size="medium"
                  edge="start"
                  color="neutral"
                  aria-label="phone"
                  sx={{ mr: 2 }}
                >
                  <FontAwesomeIcon icon={faBars} />
                </IconButton>
              </Toolbar>
            </Grid>
            <Grid item xs={false} lg={1} />
          </Grid>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
