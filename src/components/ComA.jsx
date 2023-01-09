import React, { createContext } from 'react'
import { useDispatch } from 'react-redux';
import { object } from 'yup';
import { checkState } from '../actions';
import ComB from './ComB'

const DataToSend = createContext();
const NewName = createContext();
/*create context from where u want to send the data*/
/* 1 createContext for 1 data */
const ComA = () => {
    const name="abcde";
    const newName ="Amitabh";
    const dispatch = useDispatch();
  return <>
  <DataToSend.Provider value={name} >
  <NewName.Provider value={newName}>
  <ComB />
  </NewName.Provider>
  </DataToSend.Provider>
    {/* all the value as a props pass along with the context provider are accessible to all the components
    written inside it */}
    <button onClick={()=>{dispatch(checkState(name,newName))}}>send data to other components</button>
  </>
}
// const objet={
//   info:[
//   "name",
//   "newName"
// ]};
const SendMyName =(nam="sample",action)=>{
 
  // const {name, newName}= action.payload;
switch(action.type){
  case "GETYOURSTATE":{
    console.log(action)
    console.log(action.type)
    console.log(action.payload)
    // nam.objet(...objet , [...nam.info , action.payload])
    // nam.objet{name:action.payload.name,
    // newName:action.payload.newName}
    return action.payload.name;
  }
    default:return nam;
}
}
export {SendMyName};
export default ComA;
export {  DataToSend , NewName };