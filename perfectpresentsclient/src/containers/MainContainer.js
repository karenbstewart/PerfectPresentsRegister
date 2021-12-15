import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PerfectPresentsContainer from './PerfectPresentsContainer';
import NavBar from '../components/NavBar';




const MainContainer = () => {
    return (
        <>
            <NavBar/>
            <PerfectPresentsContainer/> 
        </>       
    )
}

export default MainContainer;