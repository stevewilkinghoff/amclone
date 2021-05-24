import React, { useState, useEffect } from 'react';
import './CartItem.css';
import { useForm } from 'react-hook-form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { v4 as uuid } from 'uuid';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createFmohItem } from '../graphql/mutations';



export default function FMOHItemEntry() {
    //const [id, setId] = useState();
    const [dataObject, setDataObject] = useState({});
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const [showFirstButton, setShowFirstButton] = useState(true);
    const [description, setDescription] = useState();

    const {register, handleSubmit, errors, reset } = useForm();

    function onSubmit(values) {
        //setId(uuid());
        setDataObject(values);
        setShowSubmitButton(true);
        setShowFirstButton(false);
        setDescription(values.description);
        console.log(values);
        reset();
    }

    async function onClickSendData() {
        const input = dataObject
        await API.graphql(graphqlOperation(createFmohItem, { input }))
        setShowSubmitButton(false);
        setShowFirstButton(true);
        console.log(input);
        reset();
        
        }

        return (
            <>
            <h3>Found Money Overhead Item Entry</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="CartItem">
                <div className="CustomerList-item">
                    <div className="revenue">
                        <h5><span style={{color:"black"}}>Item description</span></h5>
                        <input hidden={true} name="id" {...register("id")} value={uuid()}/>
                        <textarea cols="80" rows="5" name="description" {...register("description")} placeholder="Describe the specific item required for your Found Money Breakeven."></textarea>
                    </div>
                </div>
              </div>
              <div className="CartItem">
                <div className="CustomerList-item">
                    <div className="revenue">
                        <h5><span style={{color:"black"}}>Amount required for this item</span></h5>
                        <input name="amount" {...register("amount")} placeholder="$1000"></input>
                    </div>
                </div>
              </div>
              <div className="CartItem">
                <div className="CustomerList-item">
                    <div className="revenue">
                        <h5><span style={{color:"black"}}>Reason this is important...</span></h5>
                        <textarea cols="80" rows="5" name="reason" {...register("reason")} placeholder="Provide a description of why this item and achieving is meaningful to you and your company."></textarea>
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