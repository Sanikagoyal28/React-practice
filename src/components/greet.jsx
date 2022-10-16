import React from "react";

let date = new Date();
let t = date.getHours();

const customStyle = {
  color: "",
};
let wish;
function Greet() {
  if (t === 0 && t < 12) {
    wish = "GOOD MORNING";
    customStyle.color = "red";
  } else if (t >= 12 && t < 18) {
    wish = "GOOD AFTERNOON";
    customStyle.color = "green";
  } else if (t >= 18 && t <= 24) {
    wish = "GOOD NIGHT";
    customStyle.color = "blue";
  }
  return <h1 style={customStyle}> {wish} </h1>;
}
export default Greet;
