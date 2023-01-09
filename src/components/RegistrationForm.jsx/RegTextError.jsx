import React from 'react'

const RegTextError = (props) => {
 return <>
    <div className='errorMsg' style={{color:"red"}} >
        <p>{props.children}</p>
    </div>
 </>
}

export default RegTextError