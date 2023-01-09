/*defines what to do with creating a react action creator */

import axios from "axios"
export const incFunc = ()=>{
return {
    type:"INCREMENT"
}
}
export const decFunc = ()=>{
    return {
        type:"DECREMENT"
    }
}
export const checkState =(name,newName)=>{
    return {
        type:"GETYOURSTATE",
        payload:{
            name:name,
            newName:newName
        }
    }
}

export const callAnApi =()=>{
    return async (dispatch, getState)=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data)
        dispatch({
            type:"CALLANAPI",
            payload:response.data
        })
    }
}

// export const deleteAnApi =()=>{
//     return async(dispatch, getState)=>{
//          await axios.delete('https://jsonplaceholder.typicode.com/posts/2')
//         .then((res)=>console.log(res))
//         .catch((err)=>console.log(err))
//         // console.log(response)
//         // console.log(response.data)
//         // dispatch({
//         //     type:"DELETEANAPI",
//         //     payload:response.data
//         // })
//     }
// }

export const deleteAnApi =(id)=>{
    return (dispatch)=>
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>{
        console.log(res)
        dispatch({
            type:"DELETEAPI",
            payload:id
        })
    })
    .catch((err)=>console.log(err))
}
/*Action only need when you wants to update your state if you just want to send 
the data from 1 comp to another comp simply make a reducer function returns that 
data that you wants to use like example 1 */