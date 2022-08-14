import React from "react";
import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
// import Header from "../components/Header";
import Bokeh from "../components/Bokeh";
import PageSpacerMatchHeader from "../components/PageSpacerMatchHeader";
import HeaderBrochure from "../components/HeaderBrochure";

const Courses = () => {
  return (
    <div className="Page">
      <HeaderBrochure />
      <Outlet />
      <h1>You are in the Products page!</h1>
      <h3>URL: localhost:3000/products</h3>
      <div className="courses-nav">
        <Link to="/courses/search">Search</Link>
        <Box sx={{ width: "10px" }} />

        <Link to="/courses/list">List</Link>
      </div>
    </div>
  );
};

export default Courses;
