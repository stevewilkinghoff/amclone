import React, { useState } from 'react';
import '../App.css';


import Header from './Header';
import RoadmapData from '../DataRoadmap';

import RoadmapList from './RoadmapList';


function Roadmap() {

  const [roadmapData, setRoadmapData] = useState(RoadmapData);

  return (
    
    <div className="App">
      <Header title="Found Money Roadmap"/>
      
      <div className="App-main-cpm">
        <div>
        <RoadmapList className="CustomerList" roadmapData={ roadmapData } />
        </div>
        <div>
        
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
