import React from "react";
import "./portfolio.css";
import Gallery from "./carousel";

const Portfolio = () => {
  return (
    <div className="page portfolio">
      <h1>Portfolio</h1>
      <container>
        <Gallery />
      </container>
    </div>
  );
};

export default Portfolio;
