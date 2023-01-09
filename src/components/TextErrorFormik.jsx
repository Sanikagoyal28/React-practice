import React from 'react'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'

const TextErrorFormik = (props) => {
return <>
    <div className='error' style={{color:"red"}}>
        <p>{props.children}</p>
    </div>
</>
}

export default TextErrorFormik