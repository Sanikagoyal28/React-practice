import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callAnApi } from "../actions/index";
import { deleteAnApi } from "../actions/index";

function FakeApi (){
    // const apilist = useSelector((s)=>s.CallingAnApiRequest.apiList);
    const apilist = useSelector((s)=>s.CallingAnApiRequest.initialObject);

    const dispatch = useDispatch();
    console.log(apilist);
    // useEffect(()=>{
    //     dispatch(callAnApi())
    // },[])
return <>
<button type="button" onClick={()=>{dispatch(callAnApi())}}>Call API</button>
{/* {
    apilist[0].map((e)=>{
console.log(e)
return(
    <h1>{e.title}</h1>
)
    })
    
} */}
{apilist?apilist.map((e)=>{
console.log(e)
return(
    <h1>{e.title}</h1>
)}):null}
<button type="button" onClick={()=>{dispatch(deleteAnApi(2))}}>Delete API</button>
</>
}
export default FakeApi