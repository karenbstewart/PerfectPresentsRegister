import React from 'react';
import Gift from '../gifts/Gift';



const PersonDetail = ({person}) => {

    if (person.gifts){

    

       const giftItems = person.gifts.map((gift) => {
         return (
             <li>
                 <Gift gift = {gift}/>
                 <p>this!!!</p>
             </li>
         )
     })


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
else{
    return <p>loading ....</p>
}
}
export default PersonDetail;


