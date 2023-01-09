import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { DataToSend } from './ComA'
import {NewName} from "./ComA"
const ComC = () => {
    const getName = useSelector((name)=>name.SendMyName)
    console.log(getName)
    const name = useContext(DataToSend)
    console.log(NewName)
    const x=NewName._currentValue;
    console.log(x)
    // use useContext wherever u need to get the data passed
    // to other components
  return (<>
  <DataToSend.Consumer>
    {(NAME)=>{
        return (
            <NewName.Consumer>
                {(NEWNAME)=>{
                    return  <h2>Hyy there, I am {NAME} {NEWNAME}</h2>
                }}
            </NewName.Consumer>
        )
    }}
  </DataToSend.Consumer>
  {/* consumer is in context api- any component whi needs the data behaves asa consumer and get 
  the data, it only accepts a function and the parameter passed in it is the value of props pass in the provider */}
    <h1>Hello , I am {getName}</h1>
    <h1>Hello , I am {name}</h1>
  </>
  )
}

export default ComC

/* due to the multiple nesting of consumers i.e. a callback hell is created i.e. why it is recommmended to use 
redux since there we can directly get the data from Store using useSelector */