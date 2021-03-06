import React, { useState } from 'react'
import './CartItem.css';
import NumberFormat from 'react-number-format';
//import RoadmapData from '../DataRoadmap';

//const roadmap = RoadmapData;

function RoadmapStart({ roadmapData, fmOverhead }) {
    const [revisedRoadmapData, setRevisedRoadmapData] = useState(roadmapData[0])
    const [tempRoadmapData, setTempRoadmapData] = useState({...revisedRoadmapData})

    console.log(tempRoadmapData);
    console.log(revisedRoadmapData.Revenue);
    //setTempRoadmapData(Revenue:10000);
    console.log(tempRoadmapData);
    console.log(revisedRoadmapData.Revenue);

    const getFMOH = () => {
        let total = 0;
        fmOverhead.forEach((item)=> {
            total += (item.amount)
        })
            return total;
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

    return (
        <>
        <div className="CartItem">
            <div className="CustomerList-item">
                <div className="roadmap-item">
                    <div>
                    <h5><span style={{color:"black"}}>Period End:</span></h5>
                    </div>
                    <div>
                    {roadmapData[0].Period}
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
                    <h5>Found Money BE: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ getFMBE(getFMOH(0), getGPPercent((roadmapData[0].GM), (roadmapData[0].Revenue))) }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>No. Customers: </h5>
                    </div>
                    <div>
                    <NumberFormat value={ roadmapData[0].NoCustomers }  displayType={"text"}  thousandSeparator={","} decimalScale={0} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Purch. Freq.</h5>
                    </div>
                    <div>
                    <NumberFormat value={ getFreq(roadmapData[0].NoCustomers, roadmapData[0].NoTrx) }  displayType={"text"}  thousandSeparator={","} decimalScale={1} fixedDecimalScale={"true"} />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Trx. Size</h5>
                    </div>
                    <div>
                    <NumberFormat value={ getTrxSize(roadmapData[0].Revenue, roadmapData[0].NoTrx) }  displayType={"text"}  prefix={"$"}thousandSeparator={","} decimalScale={0}  />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>Gross Profit %</h5>
                    </div>
                    <div>
                    <NumberFormat value={ getGPPercent((roadmapData[0].GM), (roadmapData[0].Revenue)) }  displayType={"text"}  suffix={"%"}thousandSeparator={","} decimalScale={2} fixedDecimalScale={"true"}  />
                    </div>
                </div>
                <div className="roadmap-item">
                    <div>
                    <h5>FMBE Compare</h5>
                    </div>
                    <div>
                    <NumberFormat value={ getFMBECompare(roadmapData[0].Revenue, getFMBE(getFMOH(0), getGPPercent((roadmapData[0].GM), (roadmapData[0].Revenue)))) }  displayType={"text"}  prefix={"$"}thousandSeparator={","} decimalScale={0}   />
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
                    <input type="text" placeholder={roadmapData[0].NoCustomers}/>
                </div>
                </div>
                <div className="roadmap-item">
                <div>
                    <h5><span style={{color:"black"}}>New Purch Freq</span></h5>
                </div>
                <div>
                    <input type="text" placeholder={getFreq(roadmapData[0].NoCustomers, roadmapData[0].NoTrx)}/>
                </div>
                </div>
                <div className="roadmap-item">
                <div>
                    <h5><span style={{color:"black"}}>New Trx Size</span></h5>
                </div>
                <div>
                    <input type="text" placeholder={getTrxSize(roadmapData[0].Revenue, roadmapData[0].NoTrx)}/>
                </div>
                </div>
                <div className="roadmap-item">
                <div>
                    <h5><span style={{color:"black"}}>New Gross Profit (%)</span></h5>
                </div>
                <div>
                    <input type="text" placeholder={getGPPercent((roadmapData[0].GM), (roadmapData[0].Revenue))}/>
                </div>
                </div>
                
    </div>
    </div>
</>
    )
}

export default RoadmapStart;