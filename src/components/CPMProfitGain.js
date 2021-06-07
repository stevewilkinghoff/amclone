import React, { useState } from 'react'
import './CartTotal.css';
import '../App.css';
import NumberFormat from 'react-number-format';

function CPMProfitGain ( { crossSellProfitGainWoo, profitReplacementGainWoo }) {

    const [crossSellProfitGain, setCrossSellProfitGain] = useState(crossSellProfitGainWoo);

    return (
        <div className="CPM-quadrants-pieces">
            <div>
            <h3>Total CPM Profit Gain</h3>
            </div>
            <div>
                <NumberFormat value={ crossSellProfitGainWoo + profitReplacementGainWoo }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} defaultValue={0} />
            </div>
        </div>
    )
}


export default CPMProfitGain;