import * as React from "react";
import {
  Grid,
  Box,
  Button,
  Typography,
  FormControlLabel,
  FormGroup,
  IconButton,
} from "@mui/material/";
// import HeroBottomLeft from "./HeroBottomLeft";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PanelFlexTop from "./PanelFlexTop";
import PanelFlexBottom from "./PanelFlexBottom";
import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";
import PanelCurvedTop from "./PanelCurvedTop;";
import PanelCurvedBottom from "./PanelCurvedBottom";
import HeroImagePhotoNana from "./HeroImagePhotoNana";
import HeroMarketingMessage19 from "./HeroMarketingMessage19";
import HeroMarketingMessage20 from "./HeroMarketingMessage20";
import HeroMarketingMessage21 from "./HeroMarketingMessage21";
import HeroImagePhotoDentures from "./HeroImagePhotoDentures";
import HeroImageIllustration from "./HeroImageIllustration";
import HeroImageBlank from "./HeroImageBlank";
import HeroMarketingMessageAnimated from "./HeroMarketingMessageAnimated";

import HeroMarketingMessage22 from "../components/HeroMarketingMessage22";
import HeroAnimatedBalloons from "../components/HeroAnimatedBaloons";

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

export default function CampaignSwitcher() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ height: { lg: 600 } }}>
        <TabPanel value={value} index={0}>
          <>
            <HeroImageBlank>
              <PanelLeft rightCol={<HeroAnimatedBalloons />}>
                <PanelFlexTop>
                  <HeroMarketingMessage22 />
                </PanelFlexTop>
              </PanelLeft>
            </HeroImageBlank>
          </>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <>
            <HeroImageIllustration>
              <PanelRight leftCol={<HeroMarketingMessageAnimated />}>
                <PanelFlexTop></PanelFlexTop>
              </PanelRight>
            </HeroImageIllustration>
          </>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <HeroImageBlank>
            <PanelRight leftCol={<HeroMarketingMessageAnimated />}>
              <PanelFlexTop>
                <PanelCurvedBottom />
              </PanelFlexTop>
            </PanelRight>
          </HeroImageBlank>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <HeroImagePhotoNana>
            <PanelLeft>
              <PanelFlexTop>
                {/* Bottom Left */}
                <PanelCurvedBottom />
              </PanelFlexTop>
            </PanelLeft>
          </HeroImagePhotoNana>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <>
            <HeroImagePhotoDentures>
              <PanelRight leftCol={<HeroMarketingMessage20 />}>
                <PanelFlexTop>
                  {/* Top Right */}
                  <PanelCurvedBottom />
                </PanelFlexTop>
              </PanelRight>
            </HeroImagePhotoDentures>
          </>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <></>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <></>
        </TabPanel>
      </Box>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="0" {...a11yProps(0)} />
        <Tab label="1" {...a11yProps(1)} />
        <Tab label="2" {...a11yProps(2)} />
        <Tab label="3" {...a11yProps(3)} />
        <Tab label="4" {...a11yProps(4)} />
      </Tabs>
    </>
  );
}
