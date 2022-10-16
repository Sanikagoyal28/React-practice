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
let wish;
let date = new Date();
const customStyle = {
  color: "",
};
let time = date.getHours();
if (time >= 0 && time <= 12) {
  wish = "GOOD MORNING";
  customStyle.color = "red";
} else if (time > 12 && time <= 18) {
  wish = "GOOD AFTERNOON";
  customStyle.color = "green";
} else if (time > 18 && time <= 24) {
  wish = "GOOD NIGHT";
  customStyle.color = "blue";
}
ReactDOM.render(
  <>
    <h1 className="heading" style={customStyle}>
      {wish}
    </h1>
    <p>
      Current time is : {date.getHours()+ ":"+date.getMinutes()+":"+date.getSeconds()}
    </p>
    <p>
      Current date is : {date.toLocaleDateString()}
    </p>
  </>,
  document.getElementById("root")
);
