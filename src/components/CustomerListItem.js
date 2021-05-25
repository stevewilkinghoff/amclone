import React from 'react'
import './CartItem.css';
import NumberFormat from 'react-number-format';

function CPMItem({ customer }) {
    return (
        <div className="CartItem">
            <div className="CustomerList-item">
                <div className="revenue">
                    <div>
                    <h5><span style={{color:"black"}}>Customer:</span></h5>
                    </div>
                    <div>
                    {customer.name}
                    </div>
                </div>
                <div className="revenue" style={{marginLeft: "55px"}}>
                    <div>
                    <h5>Profit: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ customer.profit }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="revenue">
                    <div>
                    <h5>Resonance: </h5>
                    </div>
                    <div className="overHeadReason">
                    {customer.resonance}  
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CPMItem;
