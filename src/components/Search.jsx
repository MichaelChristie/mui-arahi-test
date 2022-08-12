import React from "react";
import Header from "../components/Header";
import Bokeh from "../components/Bokeh";
import PageSpacerMatchHeader from "../components/PageSpacerMatchHeader";

const Search = () => {
  return (
    <>
      <Header />
      <Bokeh />
      <PageSpacerMatchHeader />
      <div className="Search">
        <h2>You are inside the Search Component</h2>
        <h4>URL: localhost:3000/courses/search</h4>
      </div>
    </>
  );
};

export default Search;
