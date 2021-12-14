import React from 'react';

const Gift = ({gift})=> {
    return(
        <div>
            <p></p>
            <p>{gift.title}</p>
            <p>{gift.gift_url}</p>
            <p>{gift.price}</p>
        </div>
    )
}

export default Gift;