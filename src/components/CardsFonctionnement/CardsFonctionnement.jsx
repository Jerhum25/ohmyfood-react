import React from 'react';
import './cardsFonctionnement.scss'
import CardFonctionnement from '../CardFonctionnement/CardFonctionnement';

function CardsFonctionnement(props) {
    return (
        <div className='cardsFonctionnement'>
            <CardFonctionnement numeroPastille="1" icone="fa-solid fa-mobile-screen-button" titre="Choisissez un restaurant" />
            <CardFonctionnement numeroPastille="2" icone="fa-solid fa-list-ul" titre="Composez votre menu" />
            <CardFonctionnement numeroPastille="3" icone="fa-solid fa-store" titre="Dégustez au restaurant" />
        </div>
    );
}

export default CardsFonctionnement;