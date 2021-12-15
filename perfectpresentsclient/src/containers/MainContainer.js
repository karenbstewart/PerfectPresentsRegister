import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PerfectPresentsContainer from './PerfectPresentsContainer';
import NavBar from '../components/NavBar';
import './MainContainer.css'




const MainContainer = () => {
    return (
        <>
        <div className='mainContainerDiv'>
            <NavBar/>
            <PerfectPresentsContainer/> 
        </div>
            
        </>       
    )
}

export default MainContainer;