import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import '../App.css';

import FMList from './FMOverheadList';
import FMOverheadTotal from './FMOverheadTotal';
import { listFmohItems } from '../graphql/queries';


function getFMOH() {
    
  const [fmOhItems, setFmOhItems] = useState([]);
  let shitty = {};
  //Get and Set Properties
  useEffect(() => {
    API.graphql(graphqlOperation(listFmohItems, {limit: 2000}))
    .then(result => {
    const thisIsIt = []
    result.data.listFMOHItems.items.forEach(item => thisIsIt.push(item))
    setFmOhItems(thisIsIt);
    console.log(listFmohItems);    
    })
},["fmOhItems"])

console.log(fmOhItems)

  return (
    
    <div className="App">
      <div className="App-main-cpm">
        <div>
        <FMList className="CustomerList" fmOverhead={ fmOhItems } />
        </div>
        <div>
        <FMOverheadTotal items={fmOhItems}/>
        </div>
      </div>
    </div>
  );
}

export default getFMOH;