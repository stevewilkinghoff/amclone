import React from 'react'

import './CartItems.css';
import Customer from './Customer';

function CustomerList({ customers }) {
  
    return (
        <div className="CartItems">
          <h1>Customer List</h1>
          <hr />
          <div className="CartItems-items">
            {customers.map((customer, index) =>
            <Customer 
            customer={customer}
            key={index} />
            )}
            
          </div>
        </div>
    )
}

export default CustomerList;