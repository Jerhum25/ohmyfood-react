import React from "react";
import "./cardsRestaurants.scss";
import CardRestaurant from "../CardRestaurant/CardRestaurant";

function CardsRestaurants(props) {
    
  return (
    <div className="cardsRestaurants">
      <CardRestaurant
        src="./images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
        nom="la palette du goût"
        localisation="Ménilmontant"
        link="/lapalettedugout"
      />
      <CardRestaurant
        src="./images/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg"
        nom="la note enchantée"
        localisation="Charonne"
        link="/lanoteenchantee"
      />
      <CardRestaurant
        src="./images/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg"
        nom="à la française"
        localisation="Cité Rouge"
        link="/alafrancaise"
      />
      <CardRestaurant
        src="./images/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg"
        nom="le délice des sens"
        localisation="Folie-Méricourt"
        link="/ledelicedessens"
      />
    </div>
  );
}

export default CardsRestaurants;
