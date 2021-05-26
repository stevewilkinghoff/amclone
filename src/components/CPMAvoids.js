import React from 'react'

import '../App.css';

function CPMAvoids({avoids, customers}) {
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h5>Avoid</h5>
            </div>
            <div>
            <h5>{(avoids.length/customers.length)*100}%</h5>
            </div>
        </div>
    )
}

export default CPMAvoids;