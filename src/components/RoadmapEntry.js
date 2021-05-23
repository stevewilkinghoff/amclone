import React from 'react'
import './CartItem.css';
import './CustomerEntry.css';
import NumberFormat from 'react-number-format';
import Header from './Header';

function RoadmapEntry() {
    return (
        <div className="App">
            <div className="App-main">
            <h3 style={{alignContent:"left"}}>Found Money Roadmap Data Entry</h3> 
            </div>
        <div className="CartItems">
            <div className="CustomerEntry-customerData" >
                <div className="CustomerEntry-customerItem">
                    <div className="CustomerEntry-customerItem-detail">
                    <h4 >Period End</h4>
                    </div>
                    <div >
                    <input className="Customer-name-entry" type="date" />
                    </div>
                </div>
                    <div className="CustomerEntry-customerItem">
                    <div className="CustomerEntry-customerItem-detail">
                    <h4 >Revenue</h4>
                    </div>
                    <input className="Customer-name-entry"  placeholder="Revenue"/>
                    </div>
                    <div className="CustomerEntry-customerItem">
                    <div className="CustomerEntry-customerItem-detail">
                    <h4 >COGS</h4>
                    </div>
                    <input className="Customer-name-entry" placeholder="COGS"/>
                    </div>
                    <div className="CustomerEntry-customerItem">
                    <div className="CustomerEntry-customerItem-detail">
                    <h4 >Gross Profit</h4>
                    </div>
                    <input className="Customer-name-entry" placeholder="Gross Profit"/>
                    </div>
                    <div className="CustomerEntry-customerItem">
                    <div className="CustomerEntry-customerItem-detail">
                    <h4 >Overhead</h4>
                    </div>
                    <input className="Customer-name-entry" placeholder="Overhead"/>
                    </div>
                    <div className="CustomerEntry-customerItem">
                    <div className="CustomerEntry-customerItem-detail">
                    <h4 >No. Customers</h4>
                    </div>
                    <input className="Customer-name-entry" placeholder="No. Customers"/>
                    </div>
                    <div className="CustomerEntry-customerItem">
                    <div className="CustomerEntry-customerItem-detail">
                    <h4 >No. Transactions</h4>
                    </div>
                    <input className="Customer-name-entry" placeholder="No. Trx"/>
                    </div>
                <div className="CustomerEntry-button-container">
                <button className="CustomerEntry-button">
                Submit
                </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default RoadmapEntry;
