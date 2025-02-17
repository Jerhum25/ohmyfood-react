import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header" id="header">
      <Link to="/" className="arrowBack">
      <i class="fas fa-long-arrow-alt-left"></i>      </Link>
      <Link to={"/"}>
        <img src="./images/logo/ohmyfood.png" alt="logo" />
      </Link>
    </div>
  );
}

export default Header;
