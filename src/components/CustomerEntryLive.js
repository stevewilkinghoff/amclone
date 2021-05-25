import React, { useState, useEffect } from 'react';
import './CartItem.css';
import './CustomerEntry.css';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createCustomerCpmData } from '../graphql/mutations';

export default function CPMEntryLive() {
        //const [id, setId] = useState();
        const [dataObject, setDataObject] = useState({});
        const [showSubmitButton, setShowSubmitButton] = useState(false);
        const [showFirstButton, setShowFirstButton] = useState(true);
    
        const {register, handleSubmit, errors, reset } = useForm();
    
        function onSubmit(values) {
            //setId(uuid());
            setDataObject(values);
            setShowSubmitButton(true);
            setShowFirstButton(false);
            console.log(values);
            reset();
        }
    
        async function onClickSendData() {
            const newDataObject = dataObject;
            const input = newDataObject;
            await API.graphql(graphqlOperation(createCustomerCpmData, { input }))
            setShowSubmitButton(false);
            setShowFirstButton(true);
            console.log(input);
            reset();
            
            }
    
            return (
                <>
                <h3>Found Money Customer Profitability Map Data Entry</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="CartItem">
                    <div className="CustomerList-item">
                        <div className="revenue">
                            <h5><span style={{color:"black"}}>Period End</span></h5>
                            <input hidden={true} name="id" {...register("id")} value={uuid()}/>
                            <input name="periodEnd" type="date" {...register("periodEnd")} ></input>
                        </div>
                    </div>
                  </div>
                  <div className="CartItem">
                    <div className="CustomerList-item">
                        <div className="revenue">
                            <h5><span style={{color:"black"}}>Customer Name</span></h5>
                            <input name="name" type="text" inputMode="numeric" {...register("name")} placeholder="Customer Name"></input>
                        </div>
                    </div>
                  </div>
                  <div className="CartItem">
                    <div className="CustomerList-item">
                        <div className="revenue">
                            <h5><span style={{color:"black"}}>Revenue in Period</span></h5>
                            <input name="revenue" type="text" inputMode="numeric" {...register("revenue")} placeholder="10000"></input>

                        </div>
                    </div>
                  </div>
                  <div className="CartItem">
                    <div className="CustomerList-item">
                        <div className="revenue">
                            <h5><span style={{color:"black"}}>Profitability for Period (optional)</span></h5>
                            <input name="profit" type="text" inputMode="numeric" {...register("profit")} placeholder="45000"></input>
                        </div>
                    </div>
                  </div>
                  <div className="CartItem">
                    <div className="CustomerList-item">
                        <div className="revenue">
                            <h5><span style={{color:"black"}}>Resonance Score</span></h5>
                            <input name="resonance" type="text" inputMode="numeric" {...register("resonance")} placeholder="7"></input>
                        </div>
                    </div>
                  </div>
                  <input type="submit" />
                </form>
                {showSubmitButton && 
                <form onSubmit={handleSubmit(onClickSendData)}>
                <button type="submit" styles={{color:"orange"}}>Do It!</button>
                </form>
                } 
                 
                </>        
              );
}
