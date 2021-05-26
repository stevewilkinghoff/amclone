import React, { useState } from 'react'
import './CartTotal.css';
import '../App.css';
import NumberFormat from 'react-number-format';

function CPMCrossSellPotential ( { medianSpread, noCrossSells }) {

    const [ noCrossSellsMoved, setNoCrossSellsMoved] = useState(0);    
   
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h3>Cross Sell Potential</h3>
            </div>
            <div>
            <input type="text" placeholder= {noCrossSells} onBlur={e => setNoCrossSellsMoved(e.target.value)}/> 
            </div>
            <div>
                <NumberFormat value={ medianSpread * noCrossSellsMoved }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
            </div>
        </div>
    )
}


export default CPMCrossSellPotential;