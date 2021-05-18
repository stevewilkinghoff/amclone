import logo from './logo.svg';
import './App.css';

import Header from '../src/components/Header';
import CartItems from '../src/components/CartItems';
import CartTotal from '../src/components/CartTotal';

function App() {

  const firstName = "Steve"
  return (
    <div className="App">
      <Header title="Amazon Cart"/>
      <div className="App-main">
        <CartItems />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
