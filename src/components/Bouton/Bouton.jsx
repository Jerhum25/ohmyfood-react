import React from 'react';
import './bouton.scss'

function Bouton({titre}) {
    return (
        <button className='bouton'>
            {titre}
        </button>
    );
}

export default Bouton;