import React from 'react'
import './CartTotal.css';
import NumberFormat from 'react-number-format';

var median = require('median')

function CPMMedianProfit( { profits }) {

    const medianProfit = () => {
        //let total = 0;
        //profits.forEach((item)=> {
        //    total += parseInt(item.profit)
        //})
            return median(profits)//total;
      }
    
    return (
        <div className="CartTotal">
            <h3>Median of All Profit
            <span className="CartTotal-Price">
                <NumberFormat value={ medianProfit() }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
            </span>
            </h3>
        </div>
    )
}


export default CPMMedianProfit;