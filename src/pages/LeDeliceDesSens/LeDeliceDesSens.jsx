import React, { useState } from "react";
import Bouton from "../../components/Bouton/Bouton";
import CardMenu from "../../components/CardMenu/CardMenu";
import "./leDeliceDesSens.scss";

function LeDeliceDesSens(props) {
  const [isCheck, setIsCheck] = useState(false);

  const handleClick = (event) => {
    setIsCheck((current) => !current);
  };

  return (
    <div className="ledelicedessens">
      <img
        src="./images/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg"
        alt="La palette du goût"
      />
      <div className="titre">
        <h2>Le délice des sens</h2>
        <i
          className={
            isCheck ? "fas fa-heart heartCheck" : "fas fa-heart"
          }
          onClick={handleClick}
        ></i>
      </div>
      <h3>entrées</h3>
      <CardMenu
        intitule="Tartare de thon"
        description="Assaisonné au yuzu"
        prix="25"
      />
      <CardMenu
        intitule="Bouchée de homard croustillant"
        description="Et sa farandole de petits légumes"
        prix="35"
      />
      <CardMenu
        intitule="Velouté de cèpes"
        description="Aux truffes"
        prix="20"
      />
      <h3>plats</h3>
      <CardMenu
        intitule="Poulet rôti aux herbes de Provence"
        description="Et sa crème de truffe"
        prix="40"
      />
      <CardMenu
        intitule="Langouste rôtie"
        description="Et ses légumes de saison"
        prix="35"
      />
      <CardMenu
        intitule="Côte de boeuf Angus"
        description="Et sa purée de panais"
        prix="44"
      />
      <h3>desserts</h3>
      <CardMenu
        intitule="Farandole de desserts"
        description="Du chef"
        prix="18"
      />
      <CardMenu intitule="Crème brulée" description="Revisitée" prix="22" />
      <CardMenu intitule="Tiramisu" description="À la noisette" prix="23" />
      <Bouton titre="Commander" />
    </div>
  );
}

export default LeDeliceDesSens;
