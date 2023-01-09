import React from 'react'

class ClassComp extends React.Component{
    render(){
        return <>
            <h1>My name is Class Component</h1>
        </>
    }
}

export default ClassComp

/* extends React.Component : gives your component access to React.Component's functions.
   render() : this method is needed to returns HTML. */
