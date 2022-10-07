import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";

import {
  faScissors,
  faBook,
  faPaintbrushPencil,
  faSearch,
  faUserCircle,
  faEdit,
  faStars,
  faGrid,
  faHome,
  faCar,
  faHandHoldingDollar,
  faLifeRing,
  faMehBlank,
  faLamp,
  faHomeAlt,
  faBorderNone,
} from "@fortawesome/pro-light-svg-icons";

export default function DocumentationTabs({}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          variant="scrollable"
          scrollButtons="auto"
          color="secondary"
          aria-label="scrollable auto tabs example"
          sx={{
            ".MuiTabs-indicator": {
              left: 0,
            },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#FFD400",
            },
          }}
        >
          <Tab sx={{ alignSelf: "flex-start" }} label="First things to check" />
          {/* <Tab sx={{ alignSelf: "flex-start" }} label="Claim types" /> */}
          {/* <Tab sx={{ alignSelf: "flex-start" }} label="Claim types" /> */}
          <Tab
            icon={<FontAwesomeIcon icon={faBorderNone} fontSize="small" />}
            iconPosition="start"
            label="Car claim"
            sx={{ alignSelf: "flex-start", padding: "0 32" }}
          />
          <Tab
            icon={<FontAwesomeIcon icon={faBorderNone} fontSize="small" />}
            iconPosition="start"
            label="Contents claim"
            sx={{ alignSelf: "flex-start", padding: "0 12" }}
          />
          <Tab
            icon={<FontAwesomeIcon icon={faBorderNone} fontSize="small" />}
            iconPosition="start"
            label="Home claim"
            sx={{ alignSelf: "flex-start", padding: "0 32" }}
          />

          <Tab sx={{ alignSelf: "flex-start" }} label="All about excesses" />
          <Tab
            sx={{ alignSelf: "flex-start" }}
            label="Finding an AA Centre or repairer"
          />
          <Tab sx={{ alignSelf: "flex-start" }} label="Fair insurance code" />
        </Tabs>
      </Box>
      {/* //MOBILE */}
      <Box sx={{ display: { xs: "block", md: "none" }, width: "480px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          //   orientation="vertical"
          variant="scrollable"
          color="secondary"
          scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#FFD400",
            },
          }}
          aria-label="scrollable auto tabs example"
        >
          <Tab label="First things to check" />
          <Tab label="Delectus rem reprehenderit rerum" />
          <Tab label="Architecto, eligendi sapiente" />
          <Tab label="Lorem ipsum consectetur adipisicing" />
          <Tab label="Delectus rerum nostrum quo ut ex" />
          <Tab label="Placeat natus" />
          <Tab label="Electus rem reprehenderit" />
        </Tabs>
      </Box>
    </>
  );
}
