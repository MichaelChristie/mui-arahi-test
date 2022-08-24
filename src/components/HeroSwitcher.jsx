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
import PanelTop from "./PanelTop";
import PanelBottom from "./PanelBottom";
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
            <HeroImageIllustration>
              <PanelRight leftCol={<HeroMarketingMessageAnimated />}>
                <PanelTop>
                  <PanelCurvedBottom />
                </PanelTop>
              </PanelRight>
            </HeroImageIllustration>
          </>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <>
            <HeroImagePhotoNana>
              <PanelLeft>
                <PanelBottom bokehMessage={<HeroMarketingMessage19 />}>
                  {/* Bottom Left */}
                  <PanelCurvedTop optionalContent={<MostTrustedCard />} />
                </PanelBottom>
              </PanelLeft>
            </HeroImagePhotoNana>
          </>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <>
            <HeroImageBlank>
              <PanelRight leftCol={<HeroMarketingMessageAnimated />}>
                <PanelTop>
                  <PanelCurvedBottom />
                </PanelTop>
              </PanelRight>
            </HeroImageBlank>
          </>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <>
            <HeroImageIllustration>
              <PanelLeft rightCol={<HeroMarketingMessage21 />}>
                <PanelTop>
                  <PanelCurvedBottom optionalContent={<MostTrustedCard />} />
                </PanelTop>
              </PanelLeft>
            </HeroImageIllustration>
          </>
        </TabPanel>
        <></>
        {/* TOP LEFT */}
        <TabPanel value={value} index={4}>
          <HeroImagePlaceholder>
            <PanelLeft>
              <PanelTop leftMessage={<HeroMarketingMessage21 />}>
                <PanelCurvedBottom
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelTop>
            </PanelLeft>
          </HeroImagePlaceholder>
        </TabPanel>
        <></>
        {/* BOTTOM LEFT */}
        <TabPanel value={value} index={5}>
          <HeroImagePlaceholder>
            <PanelLeft>
              <PanelBottom bokehMessage={<HeroMarketingMessage21 />}>
                <PanelCurvedTop
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelBottom>
            </PanelLeft>
          </HeroImagePlaceholder>
        </TabPanel>
        <></>
        {/* BOTTOM RIGHT */}
        <TabPanel value={value} index={6}>
          <HeroImagePlaceholder>
            <PanelRight leftCol={<HeroMarketingMessage21 />}>
              <PanelBottom>
                <PanelCurvedTop
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelBottom>
            </PanelRight>
          </HeroImagePlaceholder>
        </TabPanel>
        {/* TOP RIGHT */}
        <TabPanel value={value} index={7}>
          <HeroImagePlaceholder>
            <PanelRight leftCol={<HeroMarketingMessage21 />}>
              <PanelTop>
                <PanelCurvedBottom
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelTop>
            </PanelRight>
          </HeroImagePlaceholder>
        </TabPanel>

        {/* ********* */}

        <></>
        {/* TOP LEFT */}
        <TabPanel value={value} index={8}>
          <HeroImagePlaceholder>
            <PanelLeft rightCol={<PlaceholderContent />}>
              <PanelTop>
                <PanelCurvedBottom
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelTop>
            </PanelLeft>
          </HeroImagePlaceholder>
        </TabPanel>
        <></>
        {/* BOTTOM LEFT */}
        <TabPanel value={value} index={9}>
          <HeroImagePlaceholder>
            <PanelLeft rightCol={<PlaceholderContent />}>
              <PanelBottom>
                <PanelCurvedTop
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelBottom>
            </PanelLeft>
          </HeroImagePlaceholder>
        </TabPanel>
        <></>
        {/* BOTTOM RIGHT */}
        <TabPanel value={value} index={10}>
          <HeroImagePlaceholder>
            <PanelRight leftCol={<PlaceholderContent />}>
              <PanelBottom>
                <PanelCurvedTop
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelBottom>
            </PanelRight>
          </HeroImagePlaceholder>
        </TabPanel>
        {/* TOP RIGHT */}
        <TabPanel value={value} index={11}>
          <HeroImagePlaceholder>
            <PanelRight leftCol={<PlaceholderContent />}>
              <PanelTop>
                <PanelCurvedBottom
                  optionalContent={<PlaceholderHorizontalCard />}
                />
              </PanelTop>
            </PanelRight>
          </HeroImagePlaceholder>
        </TabPanel>
      </Box>

      <HiddenMenu>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Hybrid" {...a11yProps(0)} />
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
          <Tab label="TR - Custom" {...a11yProps(11)} />
        </Tabs>
      </HiddenMenu>
    </>
  );
}
