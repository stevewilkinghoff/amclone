import React, { useState } from 'react';
import './App.css';


import Header from '../src/components/Header';
import CustomerEntry from '../src/components/CustomerEntry';
import CustomerList from '../src/components/CustomerList';
import Customer from '../src/components/Customer';
//import CartTotal from '../src/components/CartTotal';
import DataTable from '../src/components/CustomerTable';
import customers from './DataCustomers';

function App1() {

  const [customerList, setCustomerList] = useState(customers);

  //<CustomerEntry className="CustomerEntry" />

  return (
    
    <div className="App">
      <Header title="Found Money Customer Profitability Mapper"/>
      
      <div className="App-main-cpm">
        <div>
        <CustomerEntry/>
        </div>
        <hr/>
        <div>
        <CustomerList className="CustomerList" customers={ customers } />
        </div>
      </div>
    </div>
  );
}

export default App1;
