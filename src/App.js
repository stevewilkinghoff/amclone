import React, { useState } from 'react';
import './App.css';

import Header from '../src/components/Header';
import CartItems from '../src/components/CartItems';
import CartTotal from '../src/components/CartTotal';
import items from './Data';

function App() {

  const [cartItems, setCartItems] = useState(items);

  return (
    
    <div className="App">
      <Header title="Amazon Cart"/>
      <div className="App-main">
        <CartItems items={ cartItems } />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
