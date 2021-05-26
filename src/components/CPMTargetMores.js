import React from 'react'

import '../App.css';
import NumberFormat from 'react-number-format';

function CPMTargetMores({targetMores, customers}) {
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h5>Target More</h5>
            </div>
            <div>
            <h5> <NumberFormat value={(targetMores.length/customers.length)*100} displayType={"text"} decimalScale={2} />%</h5>
            <p><NumberFormat value={targetMores.length} displayType={"text"} decimalScale={0} /> customers</p>
            </div>
        </div>
    )
}

export default CPMTargetMores;

