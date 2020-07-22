import React from 'react';

import './card.styles.css';

//${props.patient.id} replaces the number w/in the link
export const Card = props => (
    <div className = 'card-container'>
        <img 
            alt="patient" 
            src={`https://robohash.org/${props.patient.id}?set=set2&size=180x180`} 
        />
        <h2>{props.patient.name}</h2>
        <p>{props.patient.email}</p>
    </div>
);