import React from 'react'
import {Component} from "react";
import { useNavigate } from 'react-router-dom';
import Lifecycle from './lifecycle';

class LifeCycleMethod extends Component {

    constructor(props){
        super(props);
        this.state={
            count:0,
            counter:"ajay kumar garg",
            show:true
        }
       console.log(this)
       console.log(props.name)
    }
    componentDidMount(){
        console.log("Component did mount : render for the first time")
    }

    componentWillUnmount(){
        console.log("Component will unmount: this will renders once after the component deleted");
    }
    
   shouldComponentUpdate(nextprops,nextstate){
    console.log(nextprops,nextstate)
    console.log("should component update......");
    if(this.state.count<5 || this.state.counter=="akgec")
    return true;
    else
    return false;
   }
   //state will updated only if returns true 

   getSnapshotBeforeUpdate(prevprops,prevstate,snapshot){
    console.log(prevprops,prevstate);
    console.log("to get previous data......")
    return null;
   }

   componentDidUpdate(prevProps,prevstate){
    console.log(prevProps)
   console.log(prevProps.count)
   if(prevProps.count !== this.state.count)
   console.log("Component updated");
}
    incrementFunc(){
        this.setState({
        count : this.state.count+1,
        show:false
        })
    }
    increment(){
        if(this.state.counter=="ajay kumar garg"){
        this.setState({   
            counter:"akgec"
        })
    }
    else{
        this.setState({   
            counter:"ajay kumar garg"
        })
    }
}

 render(){
//  const navigate=useNavigate();
    return <>
    <br /><br/>
        <h1>Practicing Life cycle Methods from class component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={()=>{this.incrementFunc()}}>Increase the counter</button>
        <h2>{this.state.counter}</h2>
        <button onClick={()=>{this.increment()}}>Increase counter</button>
        <button onClick={()=>{
            // navigate("/lifecycle")
        }}>Navigate</button>
        {this.state.show?(<Lifecycle />):null}
    </>
 }
}

export default LifeCycleMethod

/*LIFECYCLEMETHODS are used with class component and in replacement of this HOOKS are used in functional component*/

/* componentDidMount() -> whenever your component load/render for the first time (like useEffect hook) 
   constructor -> to initialize a value before the page loads , The constructor in a 
   React component is called before the component is mounted. 
   this.<xyz> ->  this keyword refers to the object it belongs to.
   super() -> whenever we want to access this inside the constructor then we need to super() inside the constructor. 
   and Super is a keyword in JavaScript and is used to call super or parent class in the hierarchy. 
   here we use to get parent class of the Component inside react and to access this keyword
   componentWillUnmount() -> this will renders once after the component deleted
   componentDidUpdate() -> calls whenever the component updates
*/