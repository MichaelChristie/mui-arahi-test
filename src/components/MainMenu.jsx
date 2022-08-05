import * as React from "react";
import { Box, Button } from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleUser,
  faPhone,
} from "@fortawesome/pro-light-svg-icons";
import IconButton from "@mui/material/IconButton";
import styles from "../build/css/_variables.css";
// import { Link } from "react-router-dom";

export default function Content() {
  return (
    <Box
      sx={{
        display: "flex",
        // background: "rgba(255,255,0,0.1)",
        width: "100%",
      }}
    >
      <Box
        component="div"
        sx={{
          flexGrow: 1,
          ml: 2,
          //   background: "rgba(255,0,0,0.1)",
        }}
      >
        <Button
          endIcon={<ExpandMoreIcon />}
          color="primary"
          size="large"
          href="/product/motorcycle"
          sx={{
            fontFamily: "FSLola",
            fontWeight: 600,
            letterSpacing: -0.25,
            fontSize: 22,
            textTransform: "none",
            display: { xs: "none", sm: "inline-flex" },
            transition: "all 0.5s ease",
          }}
        >
          Our Insurance
        </Button>
        <Button
          endIcon={<ExpandMoreIcon />}
          color="primary"
          size="large"
          href="/manage-policy/diego"
          sx={{
            fontFamily: "FSLola",
            fontWeight: 600,
            letterSpacing: -0.25,
            fontSize: 22,
            textTransform: "none",
            display: { xs: "none", md: "inline-flex" },
            transition: "all 0.5s ease",
          }}
        >
          Manage Policy
        </Button>
        <Button
          endIcon={<ExpandMoreIcon />}
          color="primary"
          size="large"
          href="/claim"
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
          Claim
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          //   background: "rgba(255,255,0,0.5)",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          component="div"
          sx={{ flexGrow: 0, background: "colorBaseDummy" }}
          className={styles.colorBaseDummy}
        >
          <Button
            color="primary"
            sx={{
              mr: 3,
              textTransform: "none",
              display: { xs: "none", sm: "inline-flex" },
            }}
          >
            Help &amp; Contact
          </Button>
          <IconButton
            size="medium"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FontAwesomeIcon icon={faCircleUser} />
          </IconButton>
          <IconButton
            size="medium"
            edge="start"
            aria-label="My AA Insurance account"
            sx={{ mr: 2 }}
          >
            <FontAwesomeIcon icon={faPhone} />
          </IconButton>
          <IconButton
            size="medium"
            edge="start"
            aria-label="phone"
            sx={{ mr: 2 }}
          >
            <FontAwesomeIcon
              icon={faBars}
              sx={{
                color: "#FFD400",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
