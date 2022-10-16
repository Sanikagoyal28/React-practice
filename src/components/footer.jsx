import React from "react";
import "../index.css";

const date = new Date();
const year = date.getFullYear();
function Footer(){
    return <p className="footer">Copyright @ {year}</p>
}

export default Footer;