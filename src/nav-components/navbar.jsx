import React from "react";
import { Link } from "react-router-dom";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="navList">
          <li>
            <Link to="/home">
              <button className="navHome">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className="navAbout">About</button>
            </Link>
          </li>
          <li>
            <Link to="/education">
              <button className="navEducation">Education</button>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <button className="navPortfolio">Portfolio</button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button className="navContact">Contact</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
