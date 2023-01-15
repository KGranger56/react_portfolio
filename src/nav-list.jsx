import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./nav-list.css";
import Navbar from "./nav-components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";

function NavList() {
  return (
    <div className="navList">
      <div className="all-page-info">
        <div className="header">
          <img
            src={"https://i3.lensdump.com/i/1nGjXb.jpg"}
            alt="1nGjXb.jpg"
            border="0"
            className="my-picture"
          />
          <h2 className="name">Kelly Granger</h2>
          <h4 className="title">Junior Front-end Developer</h4>
        </div>
        <div className="menu">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} exact />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default NavList;
