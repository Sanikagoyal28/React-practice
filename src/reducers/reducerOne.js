/*tells how to do by taking the state to modify and the action to perform */
/*each state has a separate reducer function */
const initialState=0;

const changeTheNum =(state= initialState , action)=>{
    switch(action.type){
        case "INCREMENT" : return state+1;
        case "DECREMENT" : return state-1;
        default : return state;
    }
}
 export default changeTheNum;
 
 /* changeTheNum is a state inside global state */