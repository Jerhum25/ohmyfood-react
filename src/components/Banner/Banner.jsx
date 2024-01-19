import React from 'react';
import './banner.scss'
import Bouton from '../Bouton/Bouton';

function Banner(props) {
    return (
        <div className='banner'>
            <h2>Réservez le menu qui vous convient</h2>
            <p>Découvrez des restaurants d'exception, séléctionnés par nos soins.</p>
            <Bouton titre="Explorer nos restaurants"/>
        </div>
    );
}

export default Banner;