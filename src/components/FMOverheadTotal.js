import React from 'react'
import './CartTotal.css';
import NumberFormat from 'react-number-format';

function FMOverheadTotal( { items }) {

    const getTotalOH = () => {
        let total = 0;
        items.forEach((item)=> {
            total += (item.amount)
        })
            return total;
    }
    
    return (
        <div className="CartTotal">
            <h3>Found Money Overhead
            <span className="CartTotal-Price">
                <NumberFormat value={ getTotalOH() }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
            </span>
            </h3>
        </div>
    )
}


export default FMOverheadTotal;
