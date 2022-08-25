import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RegoField from "./RegoField";
import { Alert } from "@mui/material";
import RegoCarResults from "./RegoCarResults";

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
        <Box sx={{ p: 3 }}>
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
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Rego lookup" {...a11yProps(0)} />
          <Tab label="Model lookup" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <RegoField />
        <Box sx={{ mb: 2 }} />

        <Alert severity="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ornare tortor ultrices, aliquet turpis nec, dignissim sem. Nam
          venenatis gravida lacus sit amet fermentum. Curabitur ut erat elit.
        </Alert>
        <Box sx={{ mb: 2 }} />
        <RegoCarResults />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegoField />
      </TabPanel>
    </Box>
  );
}
