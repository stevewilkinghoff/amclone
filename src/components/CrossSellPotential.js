import React, { useState } from 'react'
import './CartTotal.css';
import '../App.css';
import NumberFormat from 'react-number-format';

function CPMCrossSellPotential ( { medianSpread, noCrossSells, noCustomers, totalCustomers, crossSellProfitGainWoo, setCrossSellProfitGain }) {

    
    const [ percentCrossSellsMoved, setPercentCrossSellsMoved] = useState(0);   
    const [ profitGain, setProfitGain] = useState(0);
    
    const crossSellProfitGain = () => {
        setCrossSellProfitGain(medianSpread * (percentCrossSellsMoved/100)*totalCustomers*(noCrossSells/noCustomers))
        return (medianSpread * (percentCrossSellsMoved/100)*totalCustomers*(noCrossSells/noCustomers));
      }
   
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h3>Cross Sell Potential</h3>
            </div>
            <div>
            <label>Enter % Moved</label>
            <input type="text" placeholder= {0} onBlur={e => setPercentCrossSellsMoved(e.target.value)} /> 
            </div>
            <div>
                <NumberFormat value={ crossSellProfitGain() }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
            </div>
        </div>
    )
}


export default CPMCrossSellPotential;