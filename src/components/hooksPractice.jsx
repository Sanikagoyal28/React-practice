/* 1. useState (DONE)

2. useEffect ->{
    use for sideEffects in react that is to perform something outside the component
    first priority all the sync work after the useEffect then the function inside useEffect 
    will execute i.e. if console.log(1) is written inside useEffect and console.log(2)
    is written outside , first it will log 2 then 1 . 
    [] makes the useEffect to run only single time when page reloads means if you pass a
    mutable state in it , it will not update the state since there is no re-rendering allowed each time
    due to this dependency list .
    [x] allows to call useEffect each time the changes / functions are performed on x . } (DONE)

3. useNavigate (DONE)

4. useContext ->{
    CONTEXT API/ USECONTEXT
    create context
    provider to deliever the data
    consumer to get the data
    consumer is too complicated in context api
    so recommended useContext instead of it

    ComA, ComB, ComC
} (DONE)

5. useRef ->{controlled input i.e. when u control the input field with a function or anything 
uncontrolled input i.e. when u are unable to control the input field
.....................
like useState , preserve the data . Best part does not re-render the component
so to get the value of uncontrolled input directly without using value or onChange attribute} (DONE)

6. useReducer ->{similar to redux} (DONE)

7. useMemo ->{increase or improve the performance of react components
like useEffect
diff is that we can return the functions or values inside useMemo} (DONE)

8. useCallback ->{

}

9. useLocation ->{represents current URL , like useState that returns a new location 
whenever the URL changes
...
used when u need to access the URL path of the page} (DONE)

10. useHistory ->{to navigate in between the components , important- goBack and push} (DONE)

*/

import React, { useEffect, useState , useRef, useMemo, useReducer} from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom";
import useCUSTOMHOOKS from './CUSTOMHOOKS';


const HooksPractice = () => {
    /* useEffect */
    const [value,setValue] = useState(0)
    function increaseVal(){
        setValue(value+1);
    }
    useEffect(()=>{
        console.log("inside useEffect")
    },[])
    console.log("simple console")
    useEffect(()=>{
        console.log("inside useEffect with a dependency")
    },[value])
    /* */

    /* useRef */
    const name = useRef("");
    function handleData(){
        console.log(name)
        console.log(name.current)
        console.log(name.current.value)
        alert (`Your name is ${name.current.value}`);
    }
    /* */    

    // /* useLocation */
    const location = useLocation();
    console.log(location)
    console.log(location.pathname) 
    /* */

    /* useHistory */
    // const history = useHistory();
    // console.log(history)
    /* */

    /* useMemo */
    const [state, setState] = useState(0)
    function controlState(){
        setState(state+10);
    }
    const STATE = state;
    const checkState=useMemo(()=>{
        return STATE;
    },[state])
    /* */

    /* useReducer */
    const initialState=0;
    function reducer(state, action){
        console.log(state, action);
        if(action.type === "INCREMENT")
        return state+1;
        if(action.type ==="DECREMENT")
        return state-1;
        return state;
    }
    const [data,dispatch] = useReducer(reducer, initialState)
    const navigate= useNavigate();

  return (<>
    <div>hooksPractice</div>
    <button onClick={increaseVal}>{value}</button>
    <input type="text" ref={name} />
    <button onClick={handleData}>Submit</button>
    <h1>Url of my current page is {location.pathname.replace("/","")}</h1>
{/* <button onClick={()=>history.goBack}></button> */}
<button onClick={controlState} >{checkState}</button>
{/* onClick={history.push("/pathUwantToMove")} */}
<h1>{data}</h1>
<button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
<button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
<p onClick={()=>{
    navigate("/lifecycle" , {state:{id:1,name:"react"}})
}}>NAVIGATE To</p>
<Link to="/lifecycle" state={["aman","cxmn"]}><p>Link to</p></Link>
{/* <CUSTOMHOOKS title="React JS" /> */}
{useCUSTOMHOOKS("React js")}
    </>
  )
}
export default HooksPractice;
