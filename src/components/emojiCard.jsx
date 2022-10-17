import React from "react";

function EmojiCard (props){
    return <><div className="emojiContainer">
    <div className="emojiCard">
        <p className="emojiPic">{props.emoji}</p>
        <h1 className="emojiName">{props.name}</h1>
        <p className="emojiText">{props.meaning}</p>
    </div>
    </div>
    </>
}
export default EmojiCard ;