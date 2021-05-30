import React from 'react'

import '../App.css';
import NumberFormat from 'react-number-format';

function CPMAvoids({avoids, customers, medProfit}) {
    return (
        <div className="CPM-quadrants-pieces" style={{borderBottom:"solid"}}>
            <div>
            <h4 style={{textDecorationLine:"underline"}}>Avoid</h4>
            </div>
            <div>
            <h5> <NumberFormat value={(avoids.length/customers.length)*100} displayType={"text"} decimalScale={2} />%</h5>
            <h5>Med. Profit <NumberFormat value={medProfit} displayType={"text"} decimalScale={0} prefix={"$"} /></h5>
            </div>
        </div>
    )
}

export default CPMAvoids;

