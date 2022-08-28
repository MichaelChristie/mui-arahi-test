import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import RegoLookup from "./RegoLookup";
import RegoModelSelector from "./RegoModelSelector";

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
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

export default function RegoFinderTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Rego Finder"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Rego lookup" {...a11yProps(0)} />
          <Tab label="Model lookup" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <RegoLookup />
        <Box sx={{ mb: 2 }} />

        <Box sx={{ mb: 2 }} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegoModelSelector />
        <Box sx={{ mb: 2 }} />
        <RegoModelSelector />
      </TabPanel>
    </Box>
  );
}
