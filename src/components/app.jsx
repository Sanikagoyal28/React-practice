import React from "react";
// import emojimain from "./emojiMain";
// import Keeper from "./keeper";
// import Practice from "./practice";
import emojiFunction from "./emoji";
import emojis from "../emojis";
import "../index.css";

function App () {
    return <div>
    {/* <emojimain /> */}
    <h1 className="emojiHead">EMOJIPEDIA</h1>
 {emojis.map(emojiFunction)}
    {/* <Keeper /> */}
    {/* <Practice /> */} 
    </div>
}

export default App;