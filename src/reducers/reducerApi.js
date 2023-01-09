
// const initialObject={
//     apiList:[]
// }
const initialObject={};
const CallingAnApiRequest=(state=initialObject, action)=>{
    switch(action.type){
        case "CALLANAPI":
            console.log(action.payload)
            return{
                ...state ,
               initialObject:action.payload
            }
        // case "DELETEAPI": 
        // const findId = initialObject.findIndex((e)=>) 
        default: return state
    }
}

export default CallingAnApiRequest
// const CallingAnApiRequest=(state=initialObject, action)=>{
//     switch(action.type){
//         case "CALLANAPI":
//             console.log(action.payload)
//             return{
//                 ...state ,
//                 apiList:[
//                 action.payload
//                 ]
//             }
//         default: return state
//     }
// }

// export default CallingAnApiRequest

// USE OF IMMER : TO SIMPLIFY RETURN STATEMENT ONLY PASS STATE TO MODIFY
// const produce = require(immer)
// const obj = {
//     name:"",
//     address:{
//         place:'',
//         pincode:''
//     }
// }

// return produce(state, (draft)=>{
// draft.address.place="jkd"
// })