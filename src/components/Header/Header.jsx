import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header" id="header">
      <Link to="/">
        <i className="fa-solid fa-left-long"></i>
      </Link>
      <Link to={"/"}>
        <img src="./images/logo/ohmyfood.png" alt="logo" />
      </Link>
    </div>
  );
}

export default Header;
