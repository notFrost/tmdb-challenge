import React from "react";
import companyLogo from "../images/company-logo.png";
import burgerIcon from "../images/burger-icon.png";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar row py-0 ${props.fixed}`}>
        <div className="container-fluid col-4">
          <Link
            to={`/home`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <a
              className={`navbar-brand d-flex align-items-center py-0 ${
                props.alt ? "alt" : ""
              }`}
              href="#"
            >
              <img
                src={companyLogo}
                alt="Logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top logo--image me-4"
              />
              MovieBox
            </a>
          </Link>
        </div>
        <div className="container-fliud col-5">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 alt"
              type="search"
              placeholder="What do you want to watch?"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="container-fluid col-3">
          <p className={`my-auto navbar-signin ${props.alt}`}>Sign in</p>
          <div className="burger-circle">
            <img src={burgerIcon}></img>
          </div>
        </div>
      </nav>
    </div>
  );
}
