// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// ReactDOM.render(<h1>hello world</h1>, document.getElementById("root"));
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/*
import Heading from "./components/heading.jsx";
import List from "./components/List.jsx";
import Greet from "./components/greet.jsx";
import * as op from "./calculator.js";
let date = new Date();

ReactDOM.render(
  <>
    <Greet />
    <p>
      Current time is :{" "}
      {date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}
    </p>
    <p>Current date is : {date.toLocaleDateString()}</p>
    <Heading />
    <List />
    <Heading />
    <ul>
      <li>{op.add(1,3)}</li>
      <li>{op.subtract(3,1)}</li>
      <li>{op.multiply(1,3)}</li>
      <li>{op.divide(3,2)}</li>
      <li><op.H /></li>
      <li><op.P /></li>
    </ul>
  </>,
  document.getElementById("root")
);
*/

import App from "./components/app";

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
