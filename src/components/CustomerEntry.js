import React from 'react'
import './CartItem.css';
import './CustomerEntry.css';
import NumberFormat from 'react-number-format';

let customerObject = {
    name: "Placeholder Name",
    revenue: 0,
    resonance: 1
}

function CustomerEntry() {
    return (
        <div className="CustomerEntry">
            <div className="CustomerEntry-customerData" >
                <div className="CustomerEntry-customerItem">
                    <div className="CustomerEntry-customerItem-detail">
                    <h4 >Customer Name</h4>
                    </div>
                    <div>
                    {customerObject.name}
                    </div>
                </div>
                    <div className="CustomerEntry-customerItem">
                    <div className="CustomerEntry-customerItem-detail">
                    <h4 >Customer Revenue</h4>
                    </div>
                    Revenue: {customerObject.revenue}
                </div>
                    <div className="CustomerEntry-customerItem">
                    <div className="CustomerEntry-customerItem-detail">
                    <h4 >Customer Resonance Score</h4>
                    </div>
                    Resonance: {customerObject.resonance}
                </div>
                <div className="CustomerEntry-button-container">
                <button className="CustomerEntry-button">
                Submit
                </button>
                </div>
            </div>
            
            
        </div>
    )
}

export default CustomerEntry
