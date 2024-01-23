import React from "react";
import Banner from "../../components/Banner/Banner";
import CardsRestaurants from "../../components/CardsRestaurants/CardsRestaurants";
import Fonctionnement from "../../components/Fonctionnement/Fonctionnement";
import Localisation from "../../components/Localisation/Localisation";
import "./accueil.scss";

function Accueil(props) {
  return (
    <div className="accueil">
      <Localisation />
      <Banner />
      <Fonctionnement />
      <CardsRestaurants />
    </div>
  );
}

export default Accueil;
