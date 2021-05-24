import React from 'react'
import './CartItem.css';
import NumberFormat from 'react-number-format';

function FMOverheadItem({ overhead }) {
    return (
        <div className="CartItem">
            <div className="CustomerList-item">
                <div className="revenue">
                    <div>
                    <h5><span style={{color:"black"}}>Item description:</span></h5>
                    </div>
                    <div>
                    {overhead.description}
                    </div>
                </div>
                <div className="revenue" style={{marginLeft: "55px"}}>
                    <div>
                    <h5>Amount: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ overhead.amount }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="revenue">
                    <div>
                    <h5>Reason this is important: </h5>
                    </div>
                    <div className="overHeadReason">
                    {overhead.reason}  
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FMOverheadItem;
