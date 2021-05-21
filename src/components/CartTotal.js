import React from 'react'
import './CartTotal.css';
import NumberFormat from 'react-number-format';

function CartTotal( { items }) {

    const getTotalPrice = () => {
        let total = 0;
        items.forEach((item)=> {
            total += (item.price * item.quantity)
        })
            return total;
    }

    const getTotalPrice2 = () => { 
        let total = 0;
        items.map((item, index) => {
        total += (item.price * item.quantity)
        })
        return total;
        }

    const getTotalCartItems = () => {
        let total = 0;
        items.forEach((item) => {
            total += item.quantity
        })
        return total;
    }
    
    return (
        <div className="CartTotal">
            <h3>Subtotal ({ getTotalCartItems() } items):
            <span className="CartTotal-Price">
                <NumberFormat value={ getTotalPrice2() }  displayType={"text"} prefix={"$"} thousandSeparator={","} decimalScale={2} />
            </span>
            </h3>
            <button className="CartTotal-button">
                Proceed to Checkout
            </button>
        </div>
    )
}


export default CartTotal
