import React from 'react'
import './CartItem.css';
import NumberFormat from 'react-number-format';

function FMOverheadItemEntry() {
    return (
        <>
        <form>
        <div className="CartItem">
            <div className="CustomerList-item">
                <div className="revenue">
                    <div>
                    <h5><span style={{color:"black"}}>Item description</span></h5>
                    </div>
                    <div style={{display:"flex"}}>
                    <div >
                    <textarea cols="80" rows="5"></textarea>
                    </div>
                    </div>
                </div>
             </div>    
        </div>
        <div className="CartItem">
        <div className="CustomerList-item">
            <div className="revenue">
                <div>
                <h5><span style={{color:"black"}}>Amount Required for This Item</span></h5>
                </div>
                <div style={{display:"flex"}}>
                <div >
                <input type="text" placeholder="1000" />
                </div>
                </div>
            </div>
        </div>    
        </div>
        <div className="CartItem">
        <div className="CustomerList-item">
            <div className="revenue">
                <div>
                <h5><span style={{color:"black"}}>Reason This is Important?</span></h5>
                </div>
                <div style={{display:"flex"}}>
                <div >
                <textarea cols="80" rows="5"></textarea>
                </div>
                </div>
            </div>
        </div>    
        </div>
        <div className="CartItem">
        <div className="CustomerList-item">
            <div className="revenue">
                
                <div style={{display:"flex"}}>
                <div >
                <input type="submit" />
                </div>
                </div>
            </div>
        </div>    
        </div>
    </form>
    </>
    )
}

export default FMOverheadItemEntry;
