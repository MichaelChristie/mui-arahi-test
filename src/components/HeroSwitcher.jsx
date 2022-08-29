import * as React from "react";
import {
  Grid,
  Box,
  Button,
  Typography,
  FormControlLabel,
  FormGroup,
  IconButton,
  Divider,
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
import HeroImagePhotoRing from "./HeroImagePhotoRing";
import HeroMarketingMessage19 from "./HeroMarketingMessage19";
import HeroMarketingMessage20 from "./HeroMarketingMessage20";
import HeroMarketingMessage21 from "./HeroMarketingMessage21";
import HeroImagePhotoDentures from "./HeroImagePhotoDentures";
import HeroImageIllustration from "./HeroImageIllustration";
import HeroImagePlaceholder from "./HeroImagePlaceholder";
import HeroImageBlank from "./HeroImageBlank";
import HeroMarketingMessageAnimated from "./HeroMarketingMessageAnimated";
import HiddenMenu from "../Utilities/HiddenMenu";
import PlaceholderContent from "../Utilities/PlaceholderContent";

import MostTrustedCard from "../components/MostTrustedCard";
import PlaceholderHorizontalCard from "../components/PlaceholderHorizontalCard";

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
            <HeroImagePlaceholder>
              <PanelRight leftCol={<PlaceholderContent />}>
                <PanelFlexTop>
                  <PanelCurvedBottom
                    optionalContent={<PlaceholderHorizontalCard />}
                  />
                </PanelFlexTop>
              </PanelRight>
            </HeroImagePlaceholder>
          </>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <>
            <HeroImagePhotoNana>
              <PanelLeft>
                <PanelFlexBottom bokehMessage={<HeroMarketingMessage19 />}>
                  {/* Bottom Left */}
                  <PanelCurvedTop optionalContent={<MostTrustedCard />} />
                </PanelFlexBottom>
              </PanelLeft>
            </HeroImagePhotoNana>
          </>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <>
            <HeroImageBlank>
              <PanelRight leftCol={<HeroMarketingMessageAnimated />}>
                <PanelFlexTop>
                  <PanelCurvedBottom />
                </PanelFlexTop>
              </PanelRight>
            </HeroImageBlank>
          </>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <>
            <HeroImageIllustration>
              <PanelLeft rightCol={<HeroMarketingMessage21 />}>
                <PanelFlexTop>
                  <PanelCurvedBottom optionalContent={<MostTrustedCard />} />
                </PanelFlexTop>
              </PanelLeft>
            </HeroImageIllustration>
          </>
        </TabPanel>
        <></>
        {/* TOP LEFT */}
        <TabPanel value={value} index={4}>
          <HeroImagePhotoRing>
            <PanelLeft>
              <PanelFlexTop>
                <PanelCurvedBottom
                  optionalContent={<HeroMarketingMessage21 />}
                />
              </PanelFlexTop>
            </PanelLeft>
          </HeroImagePhotoRing>
        </TabPanel>
        <></>
        {/* BOTTOM LEFT */}
        <TabPanel value={value} index={5}>
          <HeroImagePhotoRing>
            <PanelLeft>
              <PanelFlexBottom bokehMessage={<HeroMarketingMessage21 />}>
                <PanelCurvedTop optionalContent={<MostTrustedCard />} />
              </PanelFlexBottom>
            </PanelLeft>
          </HeroImagePhotoRing>
        </TabPanel>
        <></>
        {/* BOTTOM RIGHT */}
        <TabPanel value={value} index={6}>
          <HeroImagePlaceholder>
            <PanelRight leftCol={<HeroMarketingMessage21 />}>
              <PanelFlexBottom>
                <PanelCurvedTop
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelFlexBottom>
            </PanelRight>
          </HeroImagePlaceholder>
        </TabPanel>
        {/* TOP RIGHT */}
        <TabPanel value={value} index={7}>
          <HeroImagePlaceholder>
            <PanelRight leftCol={<HeroMarketingMessage21 />}>
              <PanelFlexTop>
                <PanelCurvedBottom
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelFlexTop>
            </PanelRight>
          </HeroImagePlaceholder>
        </TabPanel>

        {/* ********* */}

        <></>
        {/* TOP LEFT */}
        <TabPanel value={value} index={8}>
          <HeroImagePlaceholder>
            <PanelLeft rightCol={<PlaceholderContent />}>
              <PanelFlexTop>
                <PanelCurvedBottom
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelFlexTop>
            </PanelLeft>
          </HeroImagePlaceholder>
        </TabPanel>
        <></>
        {/* BOTTOM LEFT */}
        <TabPanel value={value} index={9}>
          <HeroImagePlaceholder>
            <PanelLeft rightCol={<PlaceholderContent />}>
              <PanelFlexBottom>
                <PanelCurvedTop
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelFlexBottom>
            </PanelLeft>
          </HeroImagePlaceholder>
        </TabPanel>
        <></>
        {/* BOTTOM RIGHT */}
        <TabPanel value={value} index={10}>
          <HeroImagePlaceholder>
            <PanelRight leftCol={<PlaceholderContent />}>
              <PanelFlexBottom>
                <PanelCurvedTop
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelFlexBottom>
            </PanelRight>
          </HeroImagePlaceholder>
        </TabPanel>
        {/* TOP RIGHT */}
        <TabPanel value={value} index={11}>
          <HeroImageIllustration>
            <PanelRight leftCol={<HeroMarketingMessageAnimated />}>
              <PanelFlexTop>
                <PanelCurvedBottom />
              </PanelFlexTop>
            </PanelRight>
          </HeroImageIllustration>
        </TabPanel>
      </Box>
      <Box
        sx={{
          position: "fixed",
          // width: 56,
          // height: 56,
          // background: "#f1f1f1",
          right: 0,
          bottom: 120,
          zIndex: 2,
        }}
      >
        <HiddenMenu>
          <Tabs
            value={value}
            orientation="vertical"
            variant="scrollable"
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="TR - Custom" {...a11yProps(0)} />
            <Tab label="Photo" {...a11yProps(1)} />
            <Tab label="Minimalist" {...a11yProps(2)} />
            <Tab label="Simple" {...a11yProps(3)} />
            <Tab label="Top Left" {...a11yProps(4)} />
            <Tab label="Bottom Left" {...a11yProps(5)} />
            <Tab label="Bottom Right" {...a11yProps(6)} />
            <Tab label="Top Right" {...a11yProps(7)} />
            <Tab label="TL - Custom" {...a11yProps(8)} />
            <Tab label="BL - Custom" {...a11yProps(9)} />
            <Tab label="BR - Custom" {...a11yProps(10)} />
            <Tab label="Hybrid" {...a11yProps(11)} />
          </Tabs>
        </HiddenMenu>
      </Box>
    </>
  );
}
