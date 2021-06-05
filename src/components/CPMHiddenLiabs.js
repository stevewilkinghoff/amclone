import React from 'react'

import '../App.css';
import NumberFormat from 'react-number-format';

function CPMHiddenLiabs({liabs, customers, medProfit}) {
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h4 style={{textDecorationLine:"underline"}}>Hidden Liabilities</h4>
            </div>
            <div>
            <h5> <NumberFormat value={(liabs.length/customers.length)*100} displayType={"text"} decimalScale={2} />%</h5>
            <h5>Avg Profit <NumberFormat value={medProfit} displayType={"text"} decimalScale={0} prefix={"$"} /></h5>
            </div>
        </div>
    )
}

export default CPMHiddenLiabs
