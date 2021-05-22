import React from 'react'
import './CartItem.css';
import NumberFormat from 'react-number-format';



function RoadmapItem({ roadmap }) {

    const getNetEarnings = () => {
        let netEarnings = 0;
        netEarnings = (roadmap.Revenue - roadmap.COGS - roadmap.Overhead);
        return netEarnings;
    }

    const getFrequency = () => {
        let frequency = 0;
        frequency = (roadmap.NoTrx / roadmap.NoCustomers);
        return frequency;
    }

    const getGrossProfitPercent = () => {
        let grossProfitPercent = 0;
        grossProfitPercent = ((roadmap.GM / roadmap.Revenue)*100);
        return grossProfitPercent;
    }

    const getAvgTrx = () => {
        let avgTrx = 0;
        avgTrx = (roadmap.Revenue / roadmap.NoTrx);
        return avgTrx;
    }

    const getAvgGPTrx = () => {
        let avgGPTrx = 0;
        avgGPTrx = (roadmap.GM / roadmap.NoTrx);
        return avgGPTrx;
    }

    return (
        <div className="CartItem">
            <div className="CustomerList-item">
                <div className="roadmap-item">
                    <div>
                    <h5><span style={{color:"black"}}>Period End:</span></h5>
                    </div>
                    <div>
                    {roadmap.Period}
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Revenue: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ roadmap.Revenue }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>COGS: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ roadmap.COGS }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Gross Profit: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ roadmap.GM }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Gross Profit (%): </h5>
                    </div>
                    <div>
                    <NumberFormat value={ getGrossProfitPercent() } displayType={"text"} suffix={"%"} decimalScale={2} fixedDecimalScale={"true"} />  
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Overhead: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ roadmap.Overhead }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Net Earnings: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ getNetEarnings() }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>No. Customers: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ roadmap.NoCustomers }  displayType={"text"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>No. Transactions: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ roadmap.NoTrx }  displayType={"text"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Trx Frequency: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ getFrequency() }  displayType={"text"} thousandSeparator={","} decimalScale={2} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Avg. Trx: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ getAvgTrx() }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Avg. GP Trx: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ getAvgGPTrx() }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default RoadmapItem;
