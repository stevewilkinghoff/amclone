import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import '../App.css';

import FMList from './FMOverheadList';
import FMOverheadTotal from './FMOverheadTotal';
import CustomerCPMList from './CustomerListOutput';
import CPMProfitAtRisk from './CustomerProfitAtRisk';
import CPMMedianProfit from './CustomerMedianProfit';
import { listCustomerCpmDatas } from '../graphql/queries';

import CPMHiddenLiabs from './CPMHiddenLiabs';
import CPMTargetMores from './CPMTargetMores';
import CPMAvoids from './CPMAvoids';
import CPMCrossSells from './CPMCrossSells';
import CPMCrossSellPotential from './CrossSellPotential';

var median = require('median')


function CustomerList() {

  const [customers, setCustomers] = useState([]);
  const [profitAtRiskCustomers, setProfitAtRiskCustomers] = useState([]);
  const [hiddenLiabCustomers, setHiddenLiabCustomers] = useState([]);
  const [avoidCustomers, setAvoidCustomers] = useState([]);
  const [crossSellCustomers, setCrossSellCustomers] = useState([]);
  const [targetMoreCustomers, setTargetMoreCustomers] = useState([]);
  
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

const crossSellPotentialMedianProfitSpread = () => {
  return (median(crossSellCustomerProfitArray()) - median(targetMoreCustomerProfitArray()));
}

let tempMedianProfit = median(customerProfitList());
let liabs = hiddenLiabCustomers;
console.log(tempMedianProfit);
console.log(totalProfitAtRisk());
console.log(customerProfitList());
console.log(liabs);
console.log(liabs.length)
console.log(avoidCustomers);
console.log(crossSellCustomers);
console.log(targetMoreCustomers);
console.log("median of crossSell profit", median(crossSellCustomerProfitArray()));
console.log("median of targetMore profit", median(targetMoreCustomerProfitArray()));



  return (
    
    <div className="App">
      <div className="App-main-cpm">
      <div>
        <CustomerCPMList className="CustomerList" customers={ customers } />
        </div>
      
      <div style={{display:"flex", flexDirection:"column"}}>
      <div style={{marginLeft:"8px"}}>
        <h3 style={{marginTop:"60px"}}></h3>
          <div className="CPM-quadrants">
            <div>
            <CPMProfitAtRisk className="CustomerList" customers={ profitAtRiskCustomers} />
            </div>
          </div>
        </div>
        <div style={{marginLeft:"8px"}}>
        <h3 style={{marginTop:"60px"}}></h3>
          <div className="CPM-quadrants">
            <div>
            <CPMCrossSellPotential className="CustomerList" medianSpread={ crossSellPotentialMedianProfitSpread()} number = {3} noCrossSells = {crossSellCustomers.length}/>
            </div>
          </div>
        </div>
        </div>
        
        <div style={{marginLeft:"8px"}}>
        <h3>Total Quadrant Weighting</h3>
          <div className="CPM-quadrants">
            <div> 
            <CPMHiddenLiabs liabs={liabs} customers={customers} />
            </div>
            <div> 
            <CPMTargetMores targetMores={targetMoreCustomers} customers={customers} />
            </div>
          </div>
          <div className="CPM-quadrants">
            <div> 
            <CPMAvoids avoids={avoidCustomers} customers={customers} />
            </div>
            <div> 
            <CPMCrossSells crossSells={crossSellCustomers} customers={customers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
