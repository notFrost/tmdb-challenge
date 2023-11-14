import React from "react";
import companyLogo from "../images/company-logo.png";
import burgerIcon from "../images/burger-icon.png";
import { useNavigate } from "react-router-dom";

import "../styles/Navbar.css";

export default function Navbar(props: any) {
  const navigate = useNavigate();
  return (
    <div>
      <nav
        className={`navbar row py-0`}
        style={{
          position: props.absolute ? "absolute" : "relative",
          paddingInline: props.absolute ? "96px" : "0",
        }}
      >
        <div className="container-fluid col-auto col-lg-4">
          <a
            className={`navbar-brand d-flex align-items-center py-0 ${
              props.alt ? "alt" : ""
            }`}
            onClick={() => {
              navigate("/");
            }}
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
        </div>
        <div className="container-fliud col-5 d-none d-lg-block">
          <form className="d-flex" role="search">
            <input
              className={`form-control me-2 ${props.alt}`}
              type="search"
              placeholder="What do you want to watch?"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="container-fluid col-3 d-none d-lg-flex">
          <p className={`my-auto navbar-signin ${props.alt}`}>Sign in</p>
          <div className="burger-circle">
            <img src={burgerIcon}></img>
          </div>
        </div>
      </nav>
    </div>
  );
}
