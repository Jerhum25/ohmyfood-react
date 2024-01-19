import React from 'react';
import './accueil.scss'
import Localisation from '../../components/Localisation/Localisation';
import Banner from '../../components/Banner/Banner';
import Fonctionnement from '../../components/Fonctionnement/Fonctionnement';
import CardsRestaurants from '../../components/CardsRestaurants/CardsRestaurants';

function Accueil(props) {
    return (
        <div className='accueil'>
            <Localisation/>
            <Banner/>
            <Fonctionnement/>
            <CardsRestaurants/>
        </div>
    );
}

export default Accueil;