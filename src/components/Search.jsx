import React from "react";
import HeaderBrochure from "./HeaderBrochure";

const Search = () => {
  return (
    <>
      <HeaderBrochure />
      <div className="Search">
        <h2>You are inside the Search Component</h2>
        <h4>URL: localhost:3000/courses/search</h4>
      </div>
    </>
  );
};

export default Search;
