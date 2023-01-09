import React from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'

const Lifecycle = () => {
  // const location=useLocation();
  // console.log(location.state)
  return (<>
    <div>lifecycle</div>
    {/* <p>{location.state[0]}</p> */}
    {/* <p>{location.state.name}</p> */}
    </>
  )
}

export default Lifecycle