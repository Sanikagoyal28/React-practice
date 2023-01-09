import React, { useState } from "react";
import "./reduxOne.css";
import {useSelector , useDispatch} from "react-redux";
import changeTheNum from "../reducers/reducerOne";
import { decFunc, incFunc } from "../actions";

function ReduxOne(){
    const [name, setName]= useState("Hey there")
    function handleName(){
        if(name=="Hey there")
        setName("Hello Everyone")
        else
        setName("Hey there")
    }
    const myState = useSelector((state)=>state.changeTheNum)
    const stateNew = useSelector((stat)=>stat.getYourState)
    // useSelector is used by all those components inside App.js which require the state i.e. who needs to get the state of redux store
    const dispatch = useDispatch();
    //action functions only trigger when written inside dispatch function ONLY 
return <>
<p>{stateNew}</p>
    <div className="outerDiv">
        <p className="heading">Increment/Decrement using Redux</p>
        <div className="buttonBg">
            <span id="minus"  onClick={()=>dispatch(decFunc())}>-</span>
            <span id="data">{myState}</span>
            <span id="plus" onClick={()=>dispatch(incFunc())}>+</span>
        </div>
    </div>
    <p>{name}</p>
    <button onClick={handleName}></button>
</>
}
export default ReduxOne;

/* need ? this state can be updated even while using that setState hooks in react js */