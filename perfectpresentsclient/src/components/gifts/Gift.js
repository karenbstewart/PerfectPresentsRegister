import React from 'react';

const Gift = ({gift})=> {
    return(
        <div>
            <p></p>
            <p>{gift.title}</p>
            <p>{gift.gift_url}</p>
            <p>{gift.price}</p>
            <input type="checkbox"/>
        </div>
    )
}

export default Gift;