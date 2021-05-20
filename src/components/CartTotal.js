import React from 'react'
import './CartTotal.css';

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
        return total.toFixed(2);
        }
    
    return (
        <div className="CartTotal">
            <h3>Subtotal ({items.length} items):
            <span className="CartTotal-Price">
                ${ getTotalPrice2() }
            </span>
            </h3>
            <button className="CartTotal-button">
                Proceed to Checkout
            </button>
        </div>
    )
}


export default CartTotal
