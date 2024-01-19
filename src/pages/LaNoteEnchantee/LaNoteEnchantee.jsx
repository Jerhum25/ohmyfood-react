import React, { useState } from "react";
import "./laNoteEnchantee.scss";
import CardMenu from "../../components/CardMenu/CardMenu";
import Bouton from "../../components/Bouton/Bouton";

function LaNoteEnchantee(props) {
  const [isCheck, setIsCheck] = useState(false);

  const handleClick = (event) => {
    setIsCheck((current) => !current);
  };

  return (
    <div className="lanoteenchantee">
      <img
        src="./images/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg"
        alt="La palette du goût"
      />
      <div className="titre">
        <h2>La note enchantée</h2>
        <i className={isCheck ? "fa-solid fa-heart heartCheck": "fa-solid fa-heart"} onClick={handleClick}></i>
      </div>
      <h3>entrées</h3>
      <CardMenu
        intitule="Ravioles de foie gras"
        description="Accompagnés de leur crème à la truffe"
        prix="25"
      />
      <CardMenu
        intitule="Caviar osciètre"
        description="Sur blini à la farine de blé noir"
        prix="35"
      />
      <CardMenu
        intitule="Homard et espuma de potiron"
        description="assaisonné à la truffe sur lit de caviar"
        prix="20"
      />
      <CardMenu
        intitule="Foie gras de canard cuit entier"
        description="Confiture de figue et pain toasté"
        prix="35"
      />
      <h3>plats</h3>
      <CardMenu
        intitule="Noix de coquilles Saint-Jacques"
        description="Sur lit de purée de céleri-rave"
        prix="40"
      />
      <CardMenu
        intitule="Langoustine poêlée"
        description="Purée de patate douce"
        prix="35"
      />
      <CardMenu
        intitule="Mijoté de queue de boeuf"
        description="Et riz sauvage aux zestes de citron"
        prix="44"
      />
      <h3>desserts</h3>
      <CardMenu
        intitule="Macaron noisette et chocolat"
        description="Glace au caramel brun et sel de Guérande"
        prix="18"
      />
      <CardMenu
        intitule="Baba au rhum revisité"
        description="Avec son coulis de citron"
        prix="22"
      />
      <CardMenu
        intitule="Tarte au citron meringuée"
        description="Déstructurée"
        prix="23"
      />
      <Bouton titre="Commander" />{" "}
    </div>
  );
}

export default LaNoteEnchantee;
