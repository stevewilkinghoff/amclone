import React, { useState } from 'react'
import './CartTotal.css';
import '../App.css';
import NumberFormat from 'react-number-format';

function CPMCrossSellPotential ( { medianSpread, noCrossSells, noCustomers, totalCustomers }) {

    const [ percentCrossSellsMoved, setPercentCrossSellsMoved] = useState(0);    
   
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h3>Cross Sell Potential</h3>
            </div>
            <div>
            <label>Enter % Moved</label>
            <input type="text" placeholder= {noCrossSells} onBlur={e => setPercentCrossSellsMoved(e.target.value)}/> 
            </div>
            <div>
                <NumberFormat value={ (medianSpread * (percentCrossSellsMoved/100)*totalCustomers*(noCrossSells/noCustomers)) }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
            </div>
        </div>
    )
}


export default CPMCrossSellPotential;