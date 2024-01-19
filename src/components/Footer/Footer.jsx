import React from "react";
import "./footer.scss";

function Footer(props) {
  return (
    <div className="footer">
      <img src="./images/logo/ohmyfood@2x.svg" alt="logo" />
      <a href="#">
        <i className="fa-solid fa-utensils"></i>Proposer un restaurant
      </a>
      <a href="#">
        <i className="fa-solid fa-handshake"></i>Devenir partenaire
      </a>
      <a href="#">Mentions légales</a>
      <a href="mailto:contact@ohmyfood.fr?subject=Réclamation client">
        Contact
      </a>
    </div>
  );
}

export default Footer;
