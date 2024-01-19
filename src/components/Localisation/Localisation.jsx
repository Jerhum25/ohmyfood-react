import React from "react";
import "./localisation.scss";

function Localisation(props) {
  return (
    <div className="localisation">
      <i className="fa-solid fa-location-dot"></i>
      <input type="text" placeholder="Paris, Belleville" />
    </div>
  );
}

export default Localisation;
