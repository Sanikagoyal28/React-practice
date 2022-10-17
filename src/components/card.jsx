import React from "react";
import "../index.css";

function Card(props) {
    return (
      <div>
        <div className="blocks">
          <div className="top">
            <h2 className="name">{props.name}</h2>
            <img className="image" src={props.source} alt="avatar" />
            <hr />
          </div>
          <div className="bottom">
            <p className="phone">{props.phone}</p>
            <p className="gmail">{props.gmail}</p>
          </div>
        </div>
      </div>
    );
  }

  export default Card;