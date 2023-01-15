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
            <Link to="/portfolio">
              <button className="navPortfolio">Portfolio</button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button className="navContact">Contact</button>
            </Link>
          </li>
          <li className="social">
            <div className="footer">
              <li className="media">
                <a
                  href="https://www.facebook.com/kelly.stephens.7773/"
                  title="Facebook Profile"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://github.com/KGranger56" title="Github Profile">
                  <i className="fab fa-github px-3"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kelly-granger-a9503b163/"
                  title="LinkedIn Profile"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
