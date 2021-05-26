import React, { useState } from 'react'
import './CartTotal.css';
import '../App.css';
import NumberFormat from 'react-number-format';

function CPMProfitReplacementPotential ( { medianSpread, noAvoids }) {

    const [ noAvoidsMoved, setNoAvoidsMoved] = useState(0);    
   
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h3>Profit Replacement Potential</h3>
            </div>
            <div>
            <input type="text" placeholder= {noAvoids} onBlur={e => setNoAvoidsMoved(e.target.value)}/> 
            </div>
            <div>
                <NumberFormat value={ medianSpread * noAvoidsMoved }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
            </div>
        </div>
    )
}


export default CPMProfitReplacementPotential;