import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material/";
import HeroBottomLeft from "./HeroBottomLeft";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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

  //   const useStyles = makeStyles((theme) => ({
  //     tab: {
  //       "& .MuiBox-root": {
  //         padding: "0px",
  //       },
  //     },
  //   }));

  return (
    <Box>
      <TabPanel
        value={value}
        index={0}
        // classes={{ root: classes.tab }}
        // sx={{ padding: "10px !important", background: "#FF0000", p: 0 }}
      >
        <Box>
          <HeroBottomLeft />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HeroBottomLeft />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HeroBottomLeft />
      </TabPanel>

      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
  );
}
