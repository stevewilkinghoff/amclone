import React from 'react'

import '../App.css';

function CPMTargetMores({targetMores, customers}) {
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h5>Target More</h5>
            </div>
            <div>
            <h5>{(targetMores.length/customers.length)*100}%</h5>
            </div>
        </div>
    )
}

export default CPMTargetMores;