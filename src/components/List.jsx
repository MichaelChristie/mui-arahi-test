import React from "react";
import HeaderBrochure from "./HeaderBrochure";

const List = () => {
  return (
    <>
      <HeaderBrochure />
      <div className="List">
        <h2>You are inside the List Component</h2>
        <h4>URL: localhost:3000/courses/list</h4>
      </div>
    </>
  );
};

export default List;
