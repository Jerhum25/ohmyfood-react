import React, { useState } from "react";
import "./laPaletteDuGout.scss";
import Bouton from "../../components/Bouton/Bouton";
import CardMenu from "../../components/CardMenu/CardMenu";

function LaPaletteDuGout(props) {
  const [isCheck, setIsCheck] = useState(false);

  const handleClick = (event) => {
    setIsCheck((current) => !current);
  };

  return (
    <div className="LaPaletteDuGout">
      <img src="./images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt="La palette du goût" />
      <div className="titre">
        <h2>La palette du gout</h2>
        <i className={isCheck ? "fa-solid fa-heart heartCheck": "fa-solid fa-heart"} onClick={handleClick}></i>
      </div>
      <h3>entrées</h3>
      <CardMenu
        intitule="fricassée d'escargot"
        description="au piment d'espelette"
        prix="25"
      />
      <CardMenu
        intitule="foie grras de canard mi-cuit"
        description="et ses copeaux de truffe noire"
        prix="35"
      />
      <CardMenu
        intitule="oeuf au plat"
        description="assaisonné à la truffe sur lit de caviar"
        prix="20"
      />
      <h3>plats</h3>
      <CardMenu
        intitule="filet de boeuf aux herbes"
        description="accompagné de sa ribambelle de légumes"
        prix="40"
      />
      <CardMenu
        intitule="parmentier de queue de boeuf"
        description="à la truffe noire sur sa purée de panais"
        prix="35"
      />
      <CardMenu
        intitule="filet de turbot"
        description="aux agrumes"
        prix="44"
      />
      <h3>desserts</h3>
      <CardMenu intitule="Paris-Brest" description="revisité" prix="18" />
      <CardMenu
        intitule="macaron au chocolat d'exception"
        description="et glace à la vanille de Madagascar"
        prix="22"
      />
      <CardMenu
        intitule="mousse au chocolat"
        description="au piment d'Espelette et à la truffe noire"
        prix="23"
      />
      <Bouton titre="Commander" />
    </div>
  );
}

export default LaPaletteDuGout;
