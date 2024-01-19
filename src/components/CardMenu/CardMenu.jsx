import React, { useState } from "react";
import "./cardMenu.scss";

function CardMenu({ intitule, description, prix }) {
  const [isCheck, setIsCheck] = useState(false);

  const handleClick = (event) => {
    setIsCheck((current) => !current);
  };

  return (
    <div className="cardMenu" onClick={handleClick}>
      <div className="gauche">
        <h4>{intitule}</h4>
        <p>{description}</p>
      </div>
      <div className={isCheck ? "droiteCheck" : "droite"}>
        <p>{prix}€</p>
        <div className="coche">
          <i className="fa-solid fa-check"></i>
        </div>
      </div>
    </div>
  );
}

export default CardMenu;
