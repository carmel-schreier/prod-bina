import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

//import Title from "../Title/Title";
import "./Header.css";
//import LogOut from "../auth/LogOut";

class Header extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-light">
          {/* <Link to="/" className="navbar-brand flex-row d-flex me-5 ms-3"> */}

          {/* </Link> */}
          <a
            href="https://www.vynopsis.com/"
            target="_blank"
            className="navbar-brand flex-row d-flex me-5 ms-3"
          >
            <img
              src="logo-v.png"
              alt="Vynopsis Logo"
              width="50"
              height="45"
              className="d-inline-block align-text-top me-3"
            />
            Vynopsis
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <NavLink to="/" className="nav-link">
                  Get Movies
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
