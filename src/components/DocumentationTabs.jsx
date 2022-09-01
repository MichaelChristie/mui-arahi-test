import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function DocumentationTabs({}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
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
          <Tab sx={{ alignSelf: "flex-start" }} label="Architecto eligendi" />
          <Tab
            sx={{ alignSelf: "flex-start" }}
            label="Delectus rem reprehenderit rerum"
          />
          <Tab
            sx={{ alignSelf: "flex-start" }}
            label="Architecto, eligendi sapiente"
          />
          <Tab
            sx={{ alignSelf: "flex-start" }}
            label="Lorem ipsum consectetur adipisicing"
          />
          <Tab
            sx={{ alignSelf: "flex-start" }}
            label="Delectus rerum nostrum quo ut ex"
          />
          <Tab sx={{ alignSelf: "flex-start" }} label="Placeat natus" />
          <Tab
            sx={{ alignSelf: "flex-start" }}
            label="Electus rem reprehenderit"
          />
        </Tabs>
      </Box>
      {/* //MOBILE */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Tabs
          // value={value}
          // onChange={handleChange}
          //   orientation="vertical"
          variant="scrollable"
          color="secondary"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Architecto eligendi" />
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
