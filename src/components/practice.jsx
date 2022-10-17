import React from "react";
import "../index.css";
import Heading from "./heading.jsx";
import List from "./List";
import Greet from "./greet.jsx";
import * as op from "./calculator.jsx";
import Card from "./card";
let date = new Date();

function Practice () {
  return <div>
    <Greet />
    <p className="current">
      Current time is :
      {date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}
    </p>
    <p className="current">Current date is : {date.toLocaleDateString()}</p>
    <Heading />
    <List />
    <Heading />
    <ul>
      <li>{op.add(1, 3)}</li>
      <li>{op.subtract(3, 1)}</li>
      <li>{op.multiply(1, 3)}</li>
      <li>{op.divide(3, 2)}</li>
      <li>
        <op.H />
      </li>
      <li>
        <op.P />
      </li>
    </ul>
    <br />
    <br />
    <h1 style={{marginLeft:"50px", fontSize:"40px"}}>My contacts</h1>
    <Card
      name="amazon"
      source="https://wallpapercave.com/wp/wp4056410.jpg"
      phone="45612300"
      gmail="beyonce3@gmail.com"
    />
    <Card
      name="netflix"
      source="https://wallpapercave.com/wp/wp4056410.jpg"
      phone="789321"
      gmail="Lewis1@gmaail.com"
    />
    <Card
      name="hotstar"
      source="https://wallpapercave.com/wp/wp4056410.jpg"
      phone="741258"
      gmail="sammy2@gmail.com"
    />
  </div>
}
export default Practice;