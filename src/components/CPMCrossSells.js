import React from 'react'

import '../App.css';

function CPMCrossSells({crossSells, customers}) {
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h5>Avoid</h5>
            </div>
            <div>
            <h5>{(crossSells.length/customers.length)*100}%</h5>
            </div>
        </div>
    )
}

export default CPMCrossSells;