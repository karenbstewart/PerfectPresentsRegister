import React from 'react';
import './Gift.css'

const Gift = ({gift})=> {
    return(
        <div className='GiftStructure'>
            <p></p>
            <p><span>Gift name:</span> {gift.title}</p>
            <p><span>Url of item:</span> {gift.gift_url}</p>
            <p><span>Price:</span> £{gift.price}</p>
            <p><input type="checkbox"/>Tick the box if you wish to purchase</p>
        </div>
    )
}

export default Gift;