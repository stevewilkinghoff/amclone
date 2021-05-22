import React from 'react'
import './CartItem.css';
import NumberFormat from 'react-number-format';

function Customer({ customer }) {
    return (
        <div className="CartItem">
            <div className="CustomerList-item">
                <div className="customer">
                    <div>
                    <h5><span style={{color:"black"}}>Customer:</span></h5>
                    </div>
                    <div>
                    {customer.name}
                    </div>
                </div>
                <div className="revenue">
                    <div>
                    <h5>Revenue: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ customer.revenue }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="resonance">
                    <div>
                    <h5>Resonance Score: </h5>
                    </div>
                    <div className="resonance-number">
                    {customer.resonance}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Customer
