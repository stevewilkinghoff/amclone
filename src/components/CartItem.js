import React from 'react'

import './CartItem.css';

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3RkHvPYop8CSKwWY2YiE6Mvq1QVZyrwEXbYdCW69p7CxsCmiI0A7NsF7vXQ0&usqp=CAc" alt=""/>
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>iPad Pro</h2>
                </div>
                <div className="info-stock">
                    In Stock
                </div>
                <div className="item-actions">
                    <div className="item-quantity">
                        <select className="item-quantity-style">
                            <option value="1">Qty: 1 </option>
                            <option value="2">Qty: 2 </option>
                            <option value="3">Qty: 3 </option>
                            <option value="4">Qty: 4 </option>
                        </select>
                    </div>
                    <div className="item-actions-divider"> | </div>
                    <div className="item-delete">
                        Delete
                    </div>
                </div>
            </div>
            <div className="CartItem-price">
                $769.00
            </div>
            
        </div>
    )
}

export default CartItem
