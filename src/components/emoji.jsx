import React from "react";
import EmojiCard from "./emojiCard";
 
function emojiFunction (em){
    return <EmojiCard 
    emoji = {em.emoji}
    name={em.name}
    meaning={em.meaning}
    />
}
export default emojiFunction ;
