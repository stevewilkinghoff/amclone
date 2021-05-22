import React from 'react'
import './CartItem.css';
import NumberFormat from 'react-number-format';
//import RoadmapData from '../DataRoadmap';

//const roadmap = RoadmapData;



function RoadmapStart({ roadmapData }) {

    const getNetEarnings = () => {
        let netEarnings = 0;
        netEarnings = (roadmapData.Revenue - roadmapData.COGS - roadmapData.Overhead);
        return netEarnings;
    }

    const getFrequency = () => {
        let frequency = 0;
        frequency = (roadmapData.NoTrx / roadmapData.NoCustomers);
        return frequency;
    }

    const getGrossProfitPercent = () => {
        let grossProfitPercent = 0;
        grossProfitPercent = ((roadmapData.GM / roadmapData.Revenue)*100);
        return grossProfitPercent;
    }

    const getAvgTrx = () => {
        let avgTrx = 0;
        avgTrx = (roadmapData.Revenue / roadmapData.NoTrx);
        return avgTrx;
    }

    const getAvgGPTrx = () => {
        let avgGPTrx = 0;
        avgGPTrx = (roadmapData.GM / roadmapData.NoTrx);
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
                    {roadmapData[0].Period}
                    </div>
                    <div>
                    {roadmapData[0].Period}
                    </div>
                    <div className="roadmap-item">
                    <div>
                    <h5><span style={{color:"black"}}>Period End:</span></h5>
                    </div>
                    <div>
                    {roadmapData[0].Revenue}
                    </div>
                </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default RoadmapStart;