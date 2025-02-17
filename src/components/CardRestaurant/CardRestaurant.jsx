import React, { useState } from "react";
import "./cardRestaurant.scss";
import { Link } from "react-router-dom";

function CardRestaurant({ src, nom, localisation, link }) {
  const [isCheck, setIsCheck] = useState(false);

  const handleClick = (event) => {
    setIsCheck((current) => !current);
  };

  return (
    <div className="container">
      <Link to={link} className="cardRestaurant">
        <img src={src} alt={nom} />
        <h4>{nom}</h4>
        <p>{localisation}</p>
        <span>Nouveau</span>
      </Link>
      <i
        className={
          isCheck ? "fas fa-heart heartCheck" : "fas fa-heart"
        }
        onClick={handleClick}
      ></i>
    </div>
  );
}

export default CardRestaurant;
