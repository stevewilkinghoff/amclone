import React from 'react'

import './CartItems.css';
import Customer from './Customer';
import FMOverheadItem from './FMOverheadItem';
import CPMItem from './CustomerListItem';

function CustomerCPMList({ customers }) {
  
    return (
        <div className="CartItems">
          <h1>Your CPM Analysis Customers</h1>
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

export default CustomerCPMList;
