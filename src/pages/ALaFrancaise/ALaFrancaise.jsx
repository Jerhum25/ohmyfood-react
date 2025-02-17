import React, { useState } from "react";
import "./aLaFrancaise.scss";
import CardMenu from "../../components/CardMenu/CardMenu";
import Bouton from "../../components/Bouton/Bouton";

function ALaFrancaise(props) {
  const [isCheck, setIsCheck] = useState(false);

  const handleClick = (event) => {
    setIsCheck((current) => !current);
  };

  return (
    <div className="alafrancaise">
      <img
        src="./images/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg"
        alt="La palette du goût"
      />
      <div className="titre">
        <h2>À la française</h2>
        <i
          className={
            isCheck ? "fas fa-heart heartCheck" : "fas fa-heart"
          }
          onClick={handleClick}
        ></i>
      </div>
      <h3>entrées</h3>
      <CardMenu
        intitule="Tartare de poulpe acidulé"
        description="Aux zestes d'orange"
        prix="25"
      />
      <CardMenu
        intitule="Velouté de légumes d'antan"
        description="Carotte, panais, topinambour"
        prix="35"
      />
      <CardMenu intitule="Soupe à l'oignon" description="Revisitée" prix="20" />
      <h3>plats</h3>
      <CardMenu
        intitule="Coquilles Saint-Jacques"
        description="Accompagnées d'une purée de panais"
        prix="40"
      />
      <CardMenu
        intitule="Magret de canard"
        description="Et parmentier de pommes de terre"
        prix="35"
      />
      <CardMenu
        intitule="Pigeonneau d’Ille-et-Vilaine"
        description="Sur son lit de gnocchis aux légumes"
        prix="44"
      />
      <h3>desserts</h3>
      <CardMenu
        intitule="Pétales de violettes glacés"
        description="Et purée de noisettes"
        prix="18"
      />
      <CardMenu
        intitule="Fondant au chocolat"
        description="Revisité"
        prix="22"
      />
      <CardMenu
        intitule="Millefeuille croustillant"
        description="Myrtilles et pâte d’amande"
        prix="23"
      />
      <Bouton titre="Commander" />{" "}
    </div>
  );
}

export default ALaFrancaise;
