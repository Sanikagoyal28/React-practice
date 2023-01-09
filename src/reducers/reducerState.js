/* Example-1 */
const initial="name";
const getYourState=(data=initial, action)=>{
switch(action.type){
    // case "GETYOURSTATE" : return data;
    default:return data;
}
}
 export default getYourState;

  /*To ask ?
 1. what is the significance of redux we can simply 
 update the state using useState hhok then why 
 2. need to use id -> make a reducer function on same comp ->
 export that reducer func -> import in rootReducer ->
 use the state wherever you need by useSelectors */