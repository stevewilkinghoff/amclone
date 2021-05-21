import React from 'react'
import './CartItem.css';
import NumberFormat from 'react-number-format';

function Customer({ customer }) {
    return (
        <div className="CartItem">
            <div className="CustomerList-item">
                <div className="info-title">
                    <h5><span style={{color:"black"}}>Customer: </span>{customer.name}</h5>
                </div>
                <div className="revenue">
                    <h5>Revenue: {customer.revenue}</h5>
                </div>
            </div>
            
        </div>
    )
}

export default Customer
