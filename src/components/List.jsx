import React from "react";
import Header from "../components/Header";
import Bokeh from "../components/Bokeh";
import PageSpacerMatchHeader from "../components/PageSpacerMatchHeader";

const List = () => {
  return (
    <>
      <Header />
      <Bokeh />
      <PageSpacerMatchHeader />
      <div className="List">
        <h2>You are inside the List Component</h2>
        <h4>URL: localhost:3000/courses/list</h4>
      </div>
    </>
  );
};

export default List;
