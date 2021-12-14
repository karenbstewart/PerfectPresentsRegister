import React from 'react';
import Gift from '../gifts/Gift';



const PersonDetail = ({person}) => {

       const giftItems = person.gifts.map((gift) => {
         return (
             <li>
                 <Gift gift = {gift}/>
             </li>
         )
     })

    // const giftItems = person.gifts.map((gift) => {
    //     return (
    //         <Gift gift = {gift}/>
    //     )
    // })

return(
    <>
        <p>{person.lastName}</p>
        {/* <p>{person.gifts[0].title}</p> */}
        <ul>
             {giftItems}
        </ul>
    </>
    
)
    
}

export default PersonDetail;


