import React, { useState, useEffect } from 'react';
import './CartItem.css';
import './CustomerEntry.css';
import NumberFormat from 'react-number-format';
import Header from './Header';
import { useForm } from 'react-hook-form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { v4 as uuid } from 'uuid';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createFmRoadmapData } from '../graphql/mutations';

export default function RoadmapEntryLive() {
        //const [id, setId] = useState();
        const [dataObject, setDataObject] = useState({});
        const [showSubmitButton, setShowSubmitButton] = useState(false);
        const [showFirstButton, setShowFirstButton] = useState(true);
        const [revenue, setRevenue] = useState();
        const [cogs, setCogs] = useState();
        const [grossProfit, setGrossProfit] = useState();
    
        const {register, handleSubmit, errors, reset } = useForm();
    
        function onSubmit(values) {
            //setId(uuid());
            setDataObject(values);
            setShowSubmitButton(true);
            setShowFirstButton(false);
            //setRevenue(parseInt(values.revenue));
            //setCogs(parseInt(values.cogs));
            setGrossProfit(String(parseInt(values.revenue) - parseInt(values.cogs)));
            console.log(values);
            console.log(String(parseInt(values.revenue) - parseInt(values.cogs)));
            reset();
        }
    
        async function onClickSendData() {
            const newDataObject = { ...dataObject, ['grossProfit'] : (String(parseInt(dataObject.revenue) - parseInt(dataObject.cogs)))};
            const input = newDataObject
            await API.graphql(graphqlOperation(createFmRoadmapData, { input }))
            setShowSubmitButton(false);
            setShowFirstButton(true);
            console.log(input);
            reset();
            
            }
    
            return (
                <>
                <h3>Found Money Roadmap Data Entry</h3>
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
                            <h5><span style={{color:"black"}}>Revenue for Period</span></h5>
                            <input name="revenue" type="text" inputMode="numeric" {...register("revenue")} placeholder="$1000000"></input>
                        </div>
                    </div>
                  </div>
                  <div className="CartItem">
                    <div className="CustomerList-item">
                        <div className="revenue">
                            <h5><span style={{color:"black"}}>Cost of Sales for Period</span></h5>
                            <input name="cogs" type="text" inputMode="numeric" {...register("cogs")} placeholder="$450000"></input>

                        </div>
                    </div>
                  </div>
                  <div className="CartItem">
                    <div className="CustomerList-item">
                        <div className="revenue">
                            <h5><span style={{color:"black"}}>Overhead for Period</span></h5>
                            <input name="overhead" type="text" inputMode="numeric" {...register("overhead")} placeholder="$100000"></input>
                        </div>
                    </div>
                  </div>
                  <div className="CartItem">
                    <div className="CustomerList-item">
                        <div className="revenue">
                            <h5><span style={{color:"black"}}>No. of Customers in Period</span></h5>
                            <input name="noCustomers" type="text" inputMode="numeric" {...register("noCustomers")} placeholder="500"></input>
                        </div>
                    </div>
                  </div>
                  <div className="CartItem">
                    <div className="CustomerList-item">
                        <div className="revenue">
                            <h5><span style={{color:"black"}}>No. of Transactions in Period</span></h5>
                            <input name="noTransactions" type="text" inputMode="numeric" {...register("noTransactions")} placeholder="1000"></input>
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
