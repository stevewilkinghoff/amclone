import React, { useState } from 'react';
import '../App.css';


import Header from './Header';
import RoadmapData from '../DataRoadmap';
import RoadmapStart from './RoadmapStart';

import RoadmapList from './RoadmapList';


function RoadmapStartMain() {

  const [roadmapData, setRoadmapData] = useState(RoadmapData);

  return (
    
    <div className="App">
      <Header title="Found Money Roadmap"/>
      
      <div className="App-main-cpm">
        <div>
        <RoadmapStart className="CustomerList" roadmapData={ roadmapData } />
        </div>
        
        <div>
        
        </div>
      </div>
    </div>
  );
}

export default RoadmapStartMain;