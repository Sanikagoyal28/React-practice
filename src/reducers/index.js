/*since we have to pass a root reducer in store of redux but as we can have
 multiple reducer for our particular actions so we create index.js for a main 
 reducer component to have all the reducers in it , and pass this root reducer 
 to store in redux */

 import {combineReducers} from "redux";
 import changeTheNum from "./reducerOne";
 import getYourState from "./reducerState";
import { SendMyName } from "../components/ComA";
import CallingAnApiRequest from "./reducerApi";

 const rootReducer = combineReducers({
changeTheNum,getYourState,SendMyName , CallingAnApiRequest
 })
 export default rootReducer;

 /*rootReducer is a global state*/