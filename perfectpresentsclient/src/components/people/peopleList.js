import React from 'react';
import PerfectPresentsContainer from '../../containers/PerfectPresentsContainer';
import Person from './Person';
import './PersonList.css';


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
        <div className='PersonListDiv'>
            <p><span>Pick a user from the list below:</span></p>
            <ul>
                {personItem}
            </ul>
        </div>
        
    )
}



export default PeopleList;