import React from 'react';
import './cardsFonctionnement.scss'
import CardFonctionnement from '../CardFonctionnement/CardFonctionnement';

function CardsFonctionnement(props) {
    return (
        <div className='cardsFonctionnement'>
            <CardFonctionnement numeroPastille="1" icone="fas fa-mobile-alt" titre="Choisissez un restaurant" />
            <CardFonctionnement numeroPastille="2" icone="fas fa-list-ul" titre="Composez votre menu" />
            <CardFonctionnement numeroPastille="3" icone="fas fa-store" titre="Dégustez au restaurant" />
        </div>
    );
}

export default CardsFonctionnement;