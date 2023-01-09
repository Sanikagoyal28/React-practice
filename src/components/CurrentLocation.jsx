import React, { Component } from "react";

class CurrentLocation extends Component{
 
    // constructor(){
    //     super();
    //     this.state={
    //         latitude:'',
    //         longitude:'',
    //         error:''
    //     }
    //     console.log(this)
    // }

    //another way to initialise the state
    state={
        latitude:'',
        longitude:'',
        error:''
    }
    componentDidMount(){
        console.log("Component did mount....")
        window.navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position)
       this.setState({
        latitude:position.coords.latitude
       })
        },(err)=>{
            console.log(err)
            alert("User's access for location denied")
            this.setState({
                error:err.message
            })
        })
    }
   
    render(){
        const date= new Date().getMonth();
        console.log(date)
        
        return <>
 <h1>Hey, I'm from Current Location</h1>
    <p>Latitude :{this.state.latitude}</p>
    {this.state.error?(<p>Error:{this.state.error}</p>):(null)}
    <form >
    <label for="name">Name</label><br />
    <input type="text" id="name" name="name" />
    </form>
        </> 
}
}
export default CurrentLocation;