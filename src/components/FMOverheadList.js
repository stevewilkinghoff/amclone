import React from 'react'

import './CartItems.css';
import Customer from './Customer';
import FMOverheadItem from './FMOverheadItem';

function FMList({ fmOverhead }) {
  
    return (
        <div className="CartItems">
          <h1>Found Money Overhead Items</h1>
          <hr />
          <div className="CartItems-items">
            {fmOverhead.map((overhead, index) =>
            <FMOverheadItem 
            overhead={overhead}
            key={index} />
            )}
            
          </div>
        </div>
    )
}

export default FMList;

