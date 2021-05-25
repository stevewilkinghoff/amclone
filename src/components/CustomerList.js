import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import '../App.css';

import FMList from './FMOverheadList';
import FMOverheadTotal from './FMOverheadTotal';
import CustomerCPMList from './CustomerListOutput';
import CPMProfitAtRisk from './CustomerProfitAtRisk';
import CPMMedianProfit from './CustomerMedianProfit';
import { listCustomerCpmDatas } from '../graphql/queries';

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



  return (
    
    <div className="App">
      <div className="App-main-cpm">
      <div>
        <CustomerCPMList className="CustomerList" customers={ customers } />
        </div>
      <div>
        <CPMProfitAtRisk className="CustomerList" customers={ profitAtRiskCustomers} />
      </div>
      <div style={{display:"flex-down", border: "solid", padding: "8px", marginLeft:"20px"}}>
      <h3>Total Quadrant Weighting</h3>
      <h4>Total Customers = {customers.length}</h4>
       <div> 
        <h5>Hidden Liability Quadrant - {(liabs.length/customers.length)*100}%</h5>
      </div>
      <div> 
        <h5>Avoid Quadrant - {(avoidCustomers.length/customers.length)*100}%</h5>
      </div>
      <div> 
        <h5>Cross-Sell Quadrant - {(crossSellCustomers.length/customers.length)*100}%</h5>
      </div>
      <div> 
        <h5>Target More Quadrant - {(targetMoreCustomers.length/customers.length)*100}%</h5>
      </div>
      </div>
      
        
      </div>
    </div>
  );
}

export default CustomerList;
