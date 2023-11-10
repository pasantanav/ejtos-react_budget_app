import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Currency= () => {
    return(
        <select className="form-select" style={{background:'lightgreen'}} aria-label="Currency">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    );
}

export default Currency;