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
            <PanelTop sx={{ zIndex: 1, position: "absolute" }}>
              <PanelLeft>
                <PanelCurvedBottom />
              </PanelLeft>
            </PanelTop>
          </>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <>
            <PanelTop sx={{ zIndex: 1, position: "absolute" }}>
              <PanelRight>
                <PanelCurvedBottom />
              </PanelRight>
            </PanelTop>
          </>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PanelBottom sx={{ zIndex: 1, position: "absolute" }}>
            <PanelLeft>
              <PanelCurvedTop />
            </PanelLeft>
          </PanelBottom>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PanelBottom sx={{ zIndex: 1, position: "absolute" }}>
            <PanelRight>
              <PanelCurvedTop />
            </PanelRight>
          </PanelBottom>
        </TabPanel>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        ></Box>
      </Box>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
      </Tabs>
    </>
  );
}
