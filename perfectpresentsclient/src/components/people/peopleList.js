import React from 'react';
import PerfectPresentsContainer from '../../containers/PerfectPresentsContainer';
import Person from './Person';


const PeopleList = ({people}) => {

    if (people.length === 0){
        return(<p>loading! ....</p>)
    }

    const personItem = people.map((person, index) => {
        return (
            <li key={index} className="component-item">
	        <div className="component">
	        <Person person={person} />
	        </div>
	        </li>
        )
    })

    return (
        <ul>
            {personItem}
        </ul>
    )
}



export default PeopleList;