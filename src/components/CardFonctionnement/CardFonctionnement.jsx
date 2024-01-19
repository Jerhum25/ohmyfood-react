import React from 'react';
import './cardFonctionnement.scss'

function CardFonctionnement({numeroPastille, icone, titre}) {
    return (
        <div className='cardFonctionnement'>
            <div className="pastille">{numeroPastille}</div>
            <i className={icone}></i>
            <p>{titre}</p>       
        </div>
    );
}

export default CardFonctionnement;