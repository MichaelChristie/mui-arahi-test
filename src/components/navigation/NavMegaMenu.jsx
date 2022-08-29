import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavMegaMenuCarAndVehicle from "./NavMegaCarAndVehicle";
import NavMegaMenuHomeAndContents from "./NavMegaMenuHomeAndContents";
import NavMegaMenuMisc from "./NavMegaMenuMisc";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function NavMegaMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 320,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        indicatorColor="secondary"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Car &amp; Vehicle" {...a11yProps(0)} />
        <Tab label="Home &amp; Contents" {...a11yProps(1)} />
        <Tab label="Small Business" {...a11yProps(2)} />
        <Tab label="More Insurance" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        sx={{ width: "1000px", background: "#CCCCCC", p: 2 }}
      >
        <NavMegaMenuCarAndVehicle />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NavMegaMenuHomeAndContents />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NavMegaMenuMisc />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
