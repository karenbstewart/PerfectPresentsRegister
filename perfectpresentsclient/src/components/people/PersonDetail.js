import React from 'react';
import Gift from '../gifts/Gift';
import './PersonDetail.css';



const PersonDetail = ({person}) => {

    if (person.gifts){

    

       const giftItems = person.gifts.map((gift) => {
         return (
             <li>
                 <Gift gift = {gift}/>
             </li>
         )
     })


return(
    <>
    <div className='pageContainer'>
    <div className='detailNameContainer'style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/red-geometric-background-vector-mosaic-pattern_u-L-Q1BJ2OE0.jpeg'})`}}>
        <img src={process.env.PUBLIC_URL + '/images/user1.png'}/>
        <p>{person.firstName} {person.lastName}</p>
    </div>
        
        {/* <p>{person.gifts[0].title}</p> */}
        <ul>
             {giftItems}
        </ul>
    </div>
    </>
    
)
    
}
else{
    return <p>loading ....</p>
}
}
export default PersonDetail;


