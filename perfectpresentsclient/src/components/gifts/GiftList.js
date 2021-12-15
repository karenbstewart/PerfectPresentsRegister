import React from "react";
import Gift from "./Gift";

const GiftList = ({gifts}) => {
    const giftItem = gifts.map((gift) => {
        return (<li key = {Gift.id}>
        <Gift gift={gift}/>
        
        </li>
    )
    })

    return(
        <div className="gift_unordered_list">
           <ul>
                {giftItem}
            </ul>  
        </div>
        
    )
}

export default GiftList;

