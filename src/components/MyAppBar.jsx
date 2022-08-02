import * as React from "react";
import Box from "@mui/material/Box";
import { Tabs, Tab, AppBar } from "@mui/material";
import { BrowserRouter, Route } from "react-router-dom";

export default function MyAppBar() {
  const routes = ["/books", "/favourites"];
  return (
    <BrowserRouter>
      <Route path="/">
        <AppBar>
          <Box sx={{ width: "100%" }}>
            <Tabs>
              <Tab label="Books" value={routes[0]} />
              <Tab label="Favourites" value={routes[1]} />
            </Tabs>
          </Box>
        </AppBar>
      </Route>
    </BrowserRouter>
  );
}
