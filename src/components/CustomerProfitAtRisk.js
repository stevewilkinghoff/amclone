import React from 'react'
import './CartTotal.css';
import NumberFormat from 'react-number-format';

function CPMProfitAtRisk( { customers }) {

    const totalProfitAtRisk = () => {
        let total = 0;
        customers.forEach((item)=> {
            total += parseInt(item.profit)
        })
            return total;
      }
    
    return (
        <div className="CartTotal">
            <h3>Profit At Risk
            <span className="CartTotal-Price">
                <NumberFormat value={ totalProfitAtRisk() }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
            </span>
            </h3>
        </div>
    )
}


export default CPMProfitAtRisk;