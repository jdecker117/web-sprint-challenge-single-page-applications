import React from "react";
import { Link } from "react-router-dom";
import Form from './Form';

export default function Home(props){

const {specs, change, submit, errors, disabled} = props;

    return (
        <div id="header">  
            <h1>Bloomtech Eats</h1>
            <div>
                <Link id="order-pizza" to={'/pizza'}>Order Now!</Link>
                <Form 
                specs={specs}
                submit={submit}
                change={change}
                errors={errors}
                disabled={disabled}/>
                
            </div>
        </div>
    )
}