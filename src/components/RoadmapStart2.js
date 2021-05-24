import React, { useState } from 'react'
import './CartItem.css';
import NumberFormat from 'react-number-format';
//import RoadmapData from '../DataRoadmap';

//const roadmap = RoadmapData;

function RoadmapStart2({ roadmapData, fmOverhead }) {
    const [revisedRoadmapData, setRevisedRoadmapData] = useState(roadmapData)
    const [tempRoadmapData, setTempRoadmapData] = useState({...revisedRoadmapData})
    const [revenue, setRevenue] = useState(roadmapData.revenue);
    const [cogs, setCOGS] = useState(roadmapData.cogs);
    const [grossProfit, setGrossProfit] = useState(roadmapData.grossProfit);
    const [noCustomers, setNoCustomers] = useState(roadmapData.noCustomers);
    const [noCustomersSeek, setNoCustomersSeek] = useState(roadmapData.noCustomers);
    const [noTrxSeek, setNoTrxSeek] = useState(roadmapData.noTransactions);
    const [purchFreqSeek, setPurchFreqSeek] = useState((roadmapData.noTransactions) / (roadmapData.noCustomers))
    const [trxSizeSeek, setTrxSizeSeek] = useState((roadmapData.revenue) / (roadmapData.noTransactions))
    const [gmSeek, setGmSeek] = useState((roadmapData.grossProfit) / (roadmapData.revenue));

    console.log(parseInt(roadmapData.grossProfit));

    const getFMOH = () => {
        let total = 0;
        fmOverhead.forEach((item)=> {
            total += (item.amount)
        })
            return total;
    }

    const getGM = () => {
        return (revenue - cogs);
    }

    const getFreq = (noCust, noTrx) => {
        let freq = 0;
        freq = ((noTrx) / (noCust));
        return freq;
    }
    const getTrxSize = (revenue, noTrx) => {
        let trxSize = 0;
        trxSize = ((revenue) / (noTrx));
        return trxSize;
    }
    const getGPPercent = (gm, revenue) => {
        let GPPercent = 0;
        GPPercent = (gm / revenue) * 100;
        return GPPercent;
    }
    const getFMBE = (fmoh, gm) => {
        let FMBE = 0;
        FMBE =fmoh / (gm/100) ;
        return FMBE;
    }
    const getFMBECompare = (revenue, fmbe) => {
        let FMBECompare = 0
        FMBECompare = revenue - fmbe
        return FMBECompare;
    }

    const newGetFMBECompare = (gpAchieved, fmoh) => {
        let FMBECompare = 0
        FMBECompare = gpAchieved - fmoh
        return FMBECompare;
    }

    return (
        <>
        <div className="CartItem">
            <div className="CustomerList-item">
                <div className="roadmap-item">
                    <div>
                    <h5><span style={{color:"black"}}>Period End:</span></h5>
                    </div>
                    <div>
                    {roadmapData.periodEnd}
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Found Money OH: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ getFMOH() }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Found Money Margin: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ roadmapData.grossProfit}  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Found Money Gap: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ roadmapData.grossProfit - getFMOH()}  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>No. Customers: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ roadmapData.noCustomers }  displayType={"text"}  thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Purch. Freq.</h5>
                    </div>
                    <div>
                    <NumberFormat value={ getFreq(roadmapData.noCustomers, roadmapData.noTransactions) }  displayType={"text"}  thousandSeparator={","} decimalScale={1} fixedDecimalScale={"true"} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Trx. Size</h5>
                    </div>
                    <div>
                    <NumberFormat value={ getTrxSize(roadmapData.revenue, roadmapData.noTransactions) }  displayType={"text"}  prefix={"$"}thousandSeparator={","} decimalScale={0}  />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Gross Profit %</h5>
                    </div>
                    <div>
                    <NumberFormat value={ getGPPercent((roadmapData.grossProfit), (roadmapData.revenue)) }  displayType={"text"}  suffix={"%"}thousandSeparator={","} decimalScale={2} fixedDecimalScale={"true"}  />
                    </div>
                    <div>
                        {grossProfit}
                    </div>
                </div>
            </div>
        </div>

        <div className="CartItem">
            <div className="CustomerList-item">
                <div className="roadmap-item">
                <div>
                    <h5><span style={{color:"black"}}>New No Customers</span></h5>
                </div>
                <div>
    <input type="text" placeholder= {roadmapData.noCustomers}  onChange={e => setNoCustomersSeek(e.target.value)}/>
                </div>
                </div>
                <div className="roadmap-item">
                <div>
                    <h5><span style={{color:"black"}}>New Purch Freq</span></h5>
                </div>
                <div>
                    <input type="text" placeholder={getFreq(roadmapData.noCustomers, roadmapData.noTransactions)} onChange={e => setPurchFreqSeek(e.target.value)}/>
                </div>
                </div>
                <div className="roadmap-item">
                <div>
                    <h5><span style={{color:"black"}}>New Trx Size</span></h5>
                </div>
                <div>
                    <input type="text" placeholder={getTrxSize(roadmapData.revenue, roadmapData.noTransactions)} onChange={e => setTrxSizeSeek(e.target.value)} />
                </div>
                </div>
                <div className="roadmap-item">
                <div>
                    <h5><span style={{color:"black"}}>New Gross Profit (%)</span></h5>
                </div>
                <div>
                    <input type="text" placeholder={getGPPercent((roadmapData.grossProfit), (roadmapData.revenue))} onChange={e => setGmSeek(e.target.value)}/>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>FMBE Compare</h5>
                    </div>
                    <div>
                    <NumberFormat value={ newGetFMBECompare((noCustomersSeek * purchFreqSeek * trxSizeSeek * (gmSeek)), getFMOH(0))  }  displayType={"text"}  prefix={"$"}thousandSeparator={","} decimalScale={0}   />
                    </div>
                </div>
                </div>
                
    </div>
    </div>
</>
    )
}

export default RoadmapStart2;