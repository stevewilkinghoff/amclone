import React, { useState } from 'react'
import './CartTotal.css';
import '../App.css';
import NumberFormat from 'react-number-format';

function CPMProfitReplacementPotential ( { medianSpread, noAvoids, noCustomers, totalCustomers, profitReplacementGainWoo, setProfitReplacementGain }) {

    const [ noAvoidsMoved, setNoAvoidsMoved] = useState(0);  
    
    const targetMoreProfitGain = () => {
        setProfitReplacementGain(medianSpread * (noAvoidsMoved/100)*totalCustomers*(noAvoids/noCustomers));
        return (medianSpread * (noAvoidsMoved/100)*totalCustomers*(noAvoids/noCustomers));
      }
      
   
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h3>Profit Replacement Potential</h3>
            </div>
            <div>
            <label>Enter % Moved</label>
            <input type="text" placeholder= {0} onBlur={e => setNoAvoidsMoved(e.target.value)}/> 
            </div>
            <div>
                <NumberFormat value={ targetMoreProfitGain() }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
            </div>
        </div>
    )
}


export default CPMProfitReplacementPotential;