import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
    <div className="NavBarContainer">
        <img src="/images/gifts.jpg" alt="Logo" width="100px"/>
        <p>Perfect<span>Presents</span></p>

        <a href="/">Home Page</a>
        <a href="/people">List Accounts</a>
        <a href="/gifts/new">Add a gift</a>
        <a href="*">Mystery gift idea</a>
    </div>
    
    </header>
  )
}

export default NavBar;