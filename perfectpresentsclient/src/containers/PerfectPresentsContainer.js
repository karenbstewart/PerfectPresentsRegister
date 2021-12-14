import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Request from '../helpers/request';
import PeopleList from '../components/people/peopleList';


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

    if(!people){
        return null
    }
    return(
    <>
        <Router>
        <Routes>
        <Route
            path='/'
            element={<PeopleList people={people} />}
        />
        </Routes>
        </Router>
        </>
    )






}

export default PerfectPresentsContainer;
