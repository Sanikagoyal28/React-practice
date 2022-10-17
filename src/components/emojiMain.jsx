import React from "react";
import emojiFunction from "./emoji";
import emojis from "../emojis";
import "../index.css";

function emojimain(){
    return <>
        <h1 className="emojiHead">EMOJIPEDIA</h1>
 {emojis.map(emojiFunction)}
    </>
}
export default emojimain;