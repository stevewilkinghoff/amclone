import React from 'react'

import '../App.css';
import NumberFormat from 'react-number-format';

function CPMHiddenLiabs({liabs, customers}) {
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h5>Hidden Liabilities</h5>
            </div>
            <div>
            <h5> <NumberFormat value={(liabs.length/customers.length)*100} displayType={"text"} decimalScale={2} />%</h5>
            <p><NumberFormat value={liabs.length} displayType={"text"} decimalScale={0} /> customers</p>
            </div>
        </div>
    )
}

export default CPMHiddenLiabs
