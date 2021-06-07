import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import '../App.css';
import NumberFormat from 'react-number-format';

import FMList from './FMOverheadList';
import FMOverheadTotal from './FMOverheadTotal';
import CustomerCPMList from './CustomerListOutput';
import CPMProfitAtRisk from './CustomerProfitAtRisk';
import CPMMedianProfit from './CustomerMedianProfit';
import { listCustomerCpmDatas } from '../graphql/queries';
import { listFmRoadmapDatas } from '../graphql/queries';

import CPMHiddenLiabs from './CPMHiddenLiabs';
import CPMTargetMores from './CPMTargetMores';
import CPMAvoids from './CPMAvoids';
import CPMCrossSells from './CPMCrossSells';
import CPMCrossSellPotential from './CrossSellPotential';
import CPMProfitReplacementPotential from './ProfitReplacementPotential';

var median = require('median')


function CustomerList() {

  const [customers, setCustomers] = useState([]);
  const [profitAtRiskCustomers, setProfitAtRiskCustomers] = useState([]);
  const [hiddenLiabCustomers, setHiddenLiabCustomers] = useState([]);
  const [avoidCustomers, setAvoidCustomers] = useState([]);
  const [crossSellCustomers, setCrossSellCustomers] = useState([]);
  const [targetMoreCustomers, setTargetMoreCustomers] = useState([]);
  const [totalCustomersForAnalysis, setTotalCustomersForAnalysis] = useState();
  const [roadmapDataItems, setRoadmapDataItems] = useState([]);
  const [crossSellProfitGain, setCrossSellProiftGain] = useState(0);
  const [profitReplacementGain, setProfitReplacementGain] = useState(0);

  //add something here to pass state to CrossSell potential to gross up calcs from customer input to total customer count
  
  useEffect(() => {
    API.graphql(graphqlOperation(listCustomerCpmDatas, {limit: 2000}))
    .then(result => {
    const thisIsIt = []
    result.data.listCustomerCpmDatas.items.forEach(item => thisIsIt.push(item))
    const tempprofitAtRisk = thisIsIt.filter(function(customer) {
      return customer.resonance <= 5
    })
    setCustomers(thisIsIt);  
    setProfitAtRiskCustomers(tempprofitAtRisk);
    })
  },[])

  useEffect(() => {
    API.graphql(graphqlOperation(listCustomerCpmDatas, {limit: 2000}))
    .then(result => {
    const thisIsIt = []
    result.data.listCustomerCpmDatas.items.forEach(item => thisIsIt.push(item))
    const hiddenLiabilities = thisIsIt.filter(customer => customer.profit > median(customerProfitList()) && customer.resonance <= 5)
    const avoids = thisIsIt.filter(customer => customer.profit <= median(customerProfitList()) && customer.resonance <=5)
    const crossSells = thisIsIt.filter(customer => customer.profit <= median(customerProfitList()) && customer.resonance > 5)
    const targetMores = thisIsIt.filter(customer => customer.profit > median(customerProfitList()) && customer.resonance > 5)
    setHiddenLiabCustomers(hiddenLiabilities);
    setAvoidCustomers(avoids);
    setCrossSellCustomers(crossSells);
    setTargetMoreCustomers(targetMores);

    })
  },[customers])

  useEffect(() => {
    API.graphql(graphqlOperation(listFmRoadmapDatas, {limit: 2000}))
    .then(result => {
    const thisIsIt = []
    result.data.listFmRoadmapDatas.items.forEach(item => thisIsIt.push(item))
    setRoadmapDataItems(thisIsIt[thisIsIt.length - 1]);
    //console.log(listFmRoadmapDatas);   
    console.log(thisIsIt) 
    })
  },[]);
  //console.log(roadmapDataItems);

  const totalProfitAtRisk = () => {
  let total = 0;
  profitAtRiskCustomers.forEach((item)=> {
      total += parseInt(item.profit)
  })
      return total;
}

  const customerProfitList = () => {
  let initialList = []
  customers.forEach((item) => {
    initialList.push(parseInt(item.profit))
  })
    return initialList;
}

const crossSellCustomerProfitArray = () => {
  let initialList = []
  crossSellCustomers.forEach((item) => {
    initialList.push(parseInt(item.profit))
  })
    return initialList;
}

const targetMoreCustomerProfitArray = () => {
  let initialList = []
  if (targetMoreCustomers.length > 0) 
    {
    targetMoreCustomers.forEach((item) => {
      initialList.push(parseInt(item.profit))
    })
    return initialList;
    }
    else {
      initialList.push(parseInt(0));
      return initialList;
    }
}

const avoidCustomerProfitArray = () => {
  let initialList = []
  if (avoidCustomers.length > 0) 
    {
    avoidCustomers.forEach((item) => {
      initialList.push(parseInt(item.profit))
    })
    return initialList;
    }
    else {
      initialList.push(parseInt(0));
      return initialList;
    }
}

const hiddenLiabilityCustomerProfitArray = () => {
  let initialList = []
  if (hiddenLiabCustomers.length > 0) 
    {
    hiddenLiabCustomers.forEach((item) => {
      initialList.push(parseInt(item.profit))
    })
    return initialList;
    }
    else {
      initialList.push(parseInt(0));
      return initialList;
    }
}

const crossSellPotentialMedianProfitSpread = () => {
  return (median(targetMoreCustomerProfitArray())- median(crossSellCustomerProfitArray()));
}

const profitReplacementPotentialMedianProfitSpread = () => {
  return (median(targetMoreCustomerProfitArray()) - median(avoidCustomerProfitArray()));
}
//console.log("targetmore med", median(targetMoreCustomerProfitArray()));
//console.log("avoid med", median(avoidCustomerProfitArray()));

const onEnterNoCustomers = (e) => {
  setTotalCustomersForAnalysis(e.target.value)
}

let tempMedianProfit = median(customerProfitList());
let liabs = hiddenLiabCustomers;
//console.log(totalCustomersForAnalysis);
console.log(crossSellProfitGain);


  return (


    
    <div className="App">
      <div className="App-main-cpm">
      <div className="CPM-quadrants">
      </div>
      <div>
        <CustomerCPMList className="CustomerList" customers={ customers } />
        </div>
      
      <div style={{display:"flex", flexDirection:"column"}}>     
      
      <div style={{marginLeft:"8px"}}>
        <h3 style={{marginTop:"60px"}}></h3>
          <div className="CPM-quadrants" style={{borderRight:"solid 2px", borderBottom:"solid"}}>
            <div>
            <CPMProfitAtRisk className="CustomerList" hiddenLiabilityCustomers={ hiddenLiabCustomers} totalCustomersForAnalysis={totalCustomersForAnalysis} />
            </div>
          </div>
      </div>
      
      <div style={{marginLeft:"8px"}}>
        <h3 style={{marginTop:"60px"}}></h3>
          <div className="CPM-quadrants" style={{borderRight:"solid 2px", borderBottom:"solid"}}>
            <div>
            <CPMCrossSellPotential className="CustomerList" medianSpread={ crossSellPotentialMedianProfitSpread()} noCrossSells = {crossSellCustomers.length} totalCustomers={roadmapDataItems.noCustomers} noCustomers={customers.length} crossSellProfitGainWoo={crossSellProfitGain} setCrossSellProfitGain={setCrossSellProiftGain}  />
            </div>
          </div>
      </div>
      <div style={{marginLeft:"8px"}}>
        <h3 style={{marginTop:"60px"}}></h3>
          <div className="CPM-quadrants" style={{borderRight:"solid 2px", borderBottom:"solid"}}>
            <div>
            <CPMProfitReplacementPotential className="CustomerList" medianSpread={ crossSellPotentialMedianProfitSpread()} noAvoids={avoidCustomers.length} totalCustomers={roadmapDataItems.noCustomers} noCustomers={customers.length} profitReplacementGainWoo={profitReplacementGain} setProfitReplacementGain={setProfitReplacementGain} />
            </div>
          </div>
      </div>
      <div style={{marginLeft:"8px"}}>
        <h3 style={{marginTop:"60px"}}></h3>
          <div className="CPM-quadrants" style={{borderRight:"solid 2px", borderBottom:"solid"}}>
            <div>
              <div>
                <h3>Total CPM Gain</h3>
              </div>
              <NumberFormat value={crossSellProfitGain + profitReplacementGain}  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={0} />
                
              </div>
          </div>
      </div>
        </div>
        
        <div style={{marginLeft:"8px"}}>
        <h3>Total Quadrant Weighting</h3>
          <div className="CPM-quadrants">
            <div> 
            <CPMHiddenLiabs liabs={liabs} customers={customers} medProfit={median(hiddenLiabilityCustomerProfitArray())}  />
            </div>
            <div> 
            <CPMTargetMores targetMores={targetMoreCustomers} customers={customers} medProfit={median(targetMoreCustomerProfitArray())} />
            </div>
          </div>
          <div className="CPM-quadrants">
            <div> 
            <CPMAvoids avoids={avoidCustomers} customers={customers} medProfit={median(avoidCustomerProfitArray())} />
            </div>
            <div> 
            <CPMCrossSells crossSells={crossSellCustomers} customers={customers} medProfit={median(crossSellCustomerProfitArray())} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
