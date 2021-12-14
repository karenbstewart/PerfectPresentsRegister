import React from 'react';
import {Link} from 'react-router-dom';

const Person = ({person}) => {

  if (!person){
    return <p>Loading...</p>
  }

  const url = "/people/" + person.id;

  return (
    <>
    {/* <Link to = {url} className="name">
    {person.firstName} {person.lastName}
    </Link> */}
    <p> {person.firstName}</p>
    </>
  )
}

export default Person;