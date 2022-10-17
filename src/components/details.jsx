import React from "react";

function Details(props){
    return <>
        <p className="phone">{props.phone}</p>
            <p className="gmail">{props.email}</p>
    </>
}
export default Details;