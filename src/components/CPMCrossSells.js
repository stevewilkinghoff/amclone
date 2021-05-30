import React from 'react'

import '../App.css';
import NumberFormat from 'react-number-format';

function CPMCrossSells({crossSells, customers, medProfit}) {
    return (
        <div className="CPM-quadrants-pieces" style={{borderRight:"solid", borderBottom:"solid"}}>
            <div>
            <h4 style={{textDecorationLine:"underline"}}>Cross-Sell</h4>
            </div>
            <div>
            <h5> <NumberFormat value={(crossSells.length/customers.length)*100} displayType={"text"} decimalScale={2} />%</h5>
            <h5>Med. Profit <NumberFormat value={medProfit} displayType={"text"} decimalScale={0} prefix={"$"} /></h5>
            </div>
        </div>
    )
}

export default CPMCrossSells;