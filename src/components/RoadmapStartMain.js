import React, { useState } from 'react';
import '../App.css';


import Header from './Header';
import RoadmapData from '../DataRoadmap';
import foundMoneyOH from '../DataFoundMoneyOH';
import RoadmapStart2 from './RoadmapStart2';

import RoadmapList from './RoadmapList';


function RoadmapStartMain() {

  const [roadmapData, setRoadmapData] = useState(RoadmapData);
  const [fmOverhead, setFmOverhead] = useState(foundMoneyOH);
  
    return (
    
    <div className="App">
        <div className="App-main">
        <h3>Found Money Roadmap</h3>
        </div>
      
      <div className="App-main-cpm">
        <div>
        <RoadmapStart2 className="CustomerList" roadmapData={ roadmapData } fmOverhead={fmOverhead} />
        </div>
        
        <div>
        
        </div>
      </div>
    </div>
  );
}

export default RoadmapStartMain;