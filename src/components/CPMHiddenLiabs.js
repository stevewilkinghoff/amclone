import React from 'react'

import '../App.css';

function CPMHiddenLiabs({liabs, customers}) {
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h5>Hidden Liabilities</h5>
            </div>
            <div>
            <h5>{(liabs.length/customers.length)*100}%</h5>
            </div>
        </div>
    )
}

export default CPMHiddenLiabs
