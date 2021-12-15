import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import PeopleList from '../components/people/PeopleList';
import PersonDetail from '../components/people/PersonDetail';
import GiftList from '../components/gifts/GiftList';
import GiftForm from '../components/gifts/Giftform';



const PerfectPresentsContainer = () => {

    const[people, setPeople] = useState([]);
    const[gifts, setGifts] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const personPromise = request.get('/api/people');
        const giftPromise = request.get('/api/gifts')

        Promise.all([personPromise, giftPromise,])
        .then((data) => {
            setPeople(data[0]);
            setGifts(data[1])
        })
    }

    useEffect(() => {
        requestAll()
    }, [])

    const findPersonById = function(id){
        return people.find((person) => {
          return person.id === parseInt(id);
        })
    }

    const handlePost = function(gift){
        const request = new Request();
        request.post("/api/gifts", gift)
        .then(() => window.location = '/people/')
    }

      

    if(!people){
        return null
    }
    return(
    <>
        <Router>
        
        <Switch>

        <Route exact path="/people/:id" render={(props) =>{
            const id = props.match.params.id;
            const person = findPersonById(id);
            return <PersonDetail person = {person}
            />
        }} /> 
        
        <Route exact path="/gifts" render={() => {
            return <GiftList gifts={gifts} />
        }} />

        <Route exact path="/gifts/new" render={()=>{
            return <GiftForm people={people} onCreate={handlePost}/>
        }} />

        <Route render={() => {
        return <PeopleList people={people} />
        {/* element={<GiftList gifts={gifts} />} */}
      }} />



        
        
        </Switch>
        </Router>
        </>
    )






}

export default PerfectPresentsContainer;
