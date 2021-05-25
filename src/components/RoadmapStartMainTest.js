import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import '../App.css';


import Header from './Header';
import RoadmapData from '../DataRoadmap';
import foundMoneyOH from '../DataFoundMoneyOH';
import RoadmapStart2 from './RoadmapStart2';
import { listFmRoadmapDatas } from '../graphql/queries';
import { listFmohItems } from '../graphql/queries';
import RoadmapList from './RoadmapList';


function RoadmapStartMainTest() {

  const [roadmapData, setRoadmapData] = useState(RoadmapData);
  const [fmOverhead, setFmOverhead] = useState([]);
  const [roadmapDataItems, setRoadmapDataItems] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listFmRoadmapDatas, {limit: 2000}))
    .then(result => {
    const thisIsIt = []
    result.data.listFmRoadmapDatas.items.forEach(item => thisIsIt.push(item))
    setRoadmapDataItems(thisIsIt[thisIsIt.length - 1]);
    //console.log(listFmRoadmapDatas);   
    //console.log(roadmapDataItems) 
    })
  },[]);

  useEffect(() => {
    API.graphql(graphqlOperation(listFmohItems, {limit: 2000}))
    .then(result => {
    const thisIsIt = []
    result.data.listFMOHItems.items.forEach(item => thisIsIt.push(item))
    setFmOverhead(thisIsIt);
    //console.log(listFmRoadmapDatas);   
    console.log(thisIsIt) 
    })
  },[])
  
    return (
    
    <div className="App">
        <div className="App-main">
        <h3>Found Money Roadmap</h3>
        </div>
      
      <div className="App-main-cpm">
        <div>
        <RoadmapStart2 className="CustomerList" roadmapData={ roadmapDataItems } fmOverhead={fmOverhead} />
        </div>
        
        <div>
        
        </div>
      </div>
    </div>
  );
}

export default RoadmapStartMainTest;