import React from 'react';

import {Card} from '../card/card.component';

import './card-list.styles.css';

//props is the parameter
export const CardList = props => (
  <div className='card-list'>
  {
    props.patients.map(patient => (<Card key={patient.id} patient = {patient} />))
  }
  </div>
);