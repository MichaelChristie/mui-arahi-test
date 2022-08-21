import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";
// import HeroBottomLeft from "./HeroBottomLeft";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PanelTop from "./PanelTop";
import PanelBottom from "./PanelBottom";
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";
import PanelCurvedTop from "./PanelCurvedTop;";
import PanelCurvedBottom from "./PanelCurvedBottom";
import HeroImagePhotoNana from "./HeroImagePhotoNana";

import HeroImagePhotoDentures from "./HeroImagePhotoDentures";
import HeroImageIllustration from "./HeroImageIllustration";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HeroSwitcher() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ height: { lg: 600 } }}>
        <TabPanel value={value} index={0}>
          <>
            <HeroImageIllustration>
              <PanelLeft>
                <PanelTop sx={{ zIndex: 1, position: "absolute" }}>
                  {/* Top Left */}
                  <PanelCurvedBottom />
                </PanelTop>
              </PanelLeft>
            </HeroImageIllustration>
          </>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <>
            <HeroImagePhotoNana>
              <PanelLeft>
                <PanelBottom sx={{ zIndex: 1, position: "absolute" }}>
                  {/* Bottom Left */}
                  <PanelCurvedTop />
                </PanelBottom>
              </PanelLeft>
            </HeroImagePhotoNana>
          </>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <HeroImagePhotoDentures>
            <PanelRight>
              <PanelBottom sx={{ zIndex: 1, position: "absolute" }}>
                {/* Bottom Right */}
                <PanelCurvedTop />
              </PanelBottom>
            </PanelRight>
          </HeroImagePhotoDentures>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <HeroImagePhotoDentures>
            <PanelRight>
              <PanelTop sx={{ zIndex: 1, position: "absolute" }}>
                {/* Top Right */}
                <PanelCurvedBottom />
              </PanelTop>
            </PanelRight>
          </HeroImagePhotoDentures>
        </TabPanel>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "transparent",
          }}
        ></Box>
      </Box>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Top Left" {...a11yProps(0)} />
        <Tab label="Bottom Left" {...a11yProps(1)} />
        <Tab label="Bottom Right" {...a11yProps(2)} />
        <Tab label="Top Right" {...a11yProps(3)} />
      </Tabs>
    </>
  );
}
