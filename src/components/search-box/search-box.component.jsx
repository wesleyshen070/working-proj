import React from 'react';

import './search-box.styles.css';

//this is a functional comp- only use is to take in params and return html
//use fcs when you dont need internal state or life cycle methods
export const SearchBox=({placeholder, handleChange})=>(
    <input 
        className = 'search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)