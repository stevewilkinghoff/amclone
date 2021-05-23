import React, { useState } from 'react';
import '../App.css';


import Header from './Header';
import CustomerEntry from './CustomerEntry';
import CustomerList from './CustomerList';
import Customer from './Customer';
import foundMoneyOH from '../DataFoundMoneyOH';
import FMList from './FMOverheadList';
import FMOverheadTotal from './FMOverheadTotal';


function FMOH() {

  const [fmOverhead, setFMOverhead] = useState(foundMoneyOH);

  return (
    
    <div className="App">
      
      
      <div className="App-main-cpm">
        <div>
        <FMList className="CustomerList" fmOverhead={ fmOverhead } />
        </div>
        <div>
        <FMOverheadTotal items={fmOverhead}/>
        </div>
      </div>
    </div>
  );
}

export default FMOH;
