import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Bootstrap = () => {
  return <>
    <div className='container'>
        <h1 className='text-center'>Welcome</h1>
        <br />
        <div className=' text-center'>
        <button className='btn btn-outline-success'>Welcome to success</button>
        </div>
    </div>
    <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="an Image" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </>
}

export default Bootstrap

/*simply copy paste the styles or html tag from bootstrap official
website and use it here */