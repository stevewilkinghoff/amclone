import React from 'react'

import '../App.css';
import NumberFormat from 'react-number-format';

function CPMAvoids({avoids, customers}) {
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h5>Avoid</h5>
            </div>
            <div>
            <h5> <NumberFormat value={(avoids.length/customers.length)*100} displayType={"text"} decimalScale={2} />%</h5>
            <p><NumberFormat value={avoids.length} displayType={"text"} decimalScale={0} /> customers</p>
            </div>
        </div>
    )
}

export default CPMAvoids;

