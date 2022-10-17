import React from "react";
import "../index.css";
import Avatar from "./avatar.jsx";
import Details from "./details";

function Card(props) {
    return (
      <div>
      <Avatar src="" alt="my-image" />
        <div className="blocks">
          <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar src={props.source} />
            <hr />
          </div>
          <div className="bottom">
            <Details phone={props.phone} email={props.gmail}/>
          </div>
        </div>
      </div>
    );
  }

  export default Card;
  