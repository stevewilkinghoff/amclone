import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import '../App.css';

import FMList from './FMOverheadList';
import FMOverheadTotal from './FMOverheadTotal';
import CustomerCPMList from './CustomerListOutput';
import CPMProfitAtRisk from './CustomerProfitAtRisk';
import { listCustomerCpmDatas } from '../graphql/queries';


function CustomerList() {

  const [customers, setCustomers] = useState([]);
  const [profitAtRisk, setProfitAtRisk] = useState([]);
  //Get and Set Properties
  
  useEffect(() => {
    API.graphql(graphqlOperation(listCustomerCpmDatas, {limit: 2000}))
    .then(result => {
    const thisIsIt = []
    result.data.listCustomerCpmDatas.items.forEach(item => thisIsIt.push(item))
    const tempprofitAtRisk = thisIsIt.filter(function(customer) {
      return customer.resonance <= 5
    })
    setProfitAtRisk(tempprofitAtRisk);
    setCustomers(thisIsIt);    
    })
  },[])

  const totalProfitAtRisk = () => {
  let total = 0;
  profitAtRisk.forEach((item)=> {
      total += parseInt(item.profit)
  })
      return total;
}
console.log(totalProfitAtRisk());

  return (
    
    <div className="App">
      <div className="App-main-cpm">
      <div>
        <CustomerCPMList className="CustomerList" customers={ customers } />
        </div>
      <div>
        <CPMProfitAtRisk className="CustomerList" customers={ profitAtRisk} />
      </div>
        
      </div>
    </div>
  );
}

export default CustomerList;
