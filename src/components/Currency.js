import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Currency= () => {
    const [selectedItem, setSelectedItem] = useState("1");
    const {dispatch} = useContext(AppContext);
    const itemsList = [
        {id:"0", currency:"$ Dollar"},
        {id:"1", currency:"£ Pound"},
        {id:"2", currency:"€ Euro"},
        {id:"3", currency:"₹ Ruppee"}
      ];
    const handleChangeItems = e => {
        setSelectedItem(e.target.value);
        const newCurrency = itemsList[e.target.value].currency.charAt(0);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
        console.log(newCurrency);
    };

    return(
        <select className="form-control" style={{background: "lightgreen", color:"white"}} value={selectedItem} onChange={handleChangeItems} required>
            {itemsList.map(option=>(
                <option key={option.id} value={option.id}>Currency ({option.currency})</option>
            ))}
        </select>
    );
}

export default Currency;