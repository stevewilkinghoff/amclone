import React from 'react'

import './CartItems.css';
import RoadmapItem from './RoadmapItem';

function RoadmapList({ roadmapData }) {
  
    return (
        <div className="CartItems">
          <h1>Found Money Roadmap</h1>
          <hr />
          <div className="CartItems-items">
            {roadmapData.map((roadmap, index) =>
            <RoadmapItem 
            roadmap={roadmap}
            key={index} />
            )}
            
          </div>
        </div>
    )
}

export default RoadmapList;