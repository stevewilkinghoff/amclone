import React from 'react'
import './CartTotal.css';
import '../App.css';
import NumberFormat from 'react-number-format';

function CPMProfitAtRisk ( { hiddenLiabilityCustomers }) {

    const totalProfitAtRisk = () => {
        let total = 0;
        hiddenLiabilityCustomers.forEach((item)=> {
            total += parseInt(item.profit)
        })
            return total;
      }
    
    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h3>Profit At Risk</h3>
            </div>
            <div>
                <NumberFormat value={ totalProfitAtRisk() }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                <p><NumberFormat value={hiddenLiabilityCustomers.length} displayType={"text"} decimalScale={0} /> customers</p>
            </div>
        </div>
    )
}


export default CPMProfitAtRisk;