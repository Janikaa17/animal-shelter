import React from 'react';
import { link } from 'react-router-dom';
import './Header.css'

const Header = () =>{
    return (
        <header className="header">
            <div className="constainer">
                <h1 className="logo"FurHaven></h1>
                <nav>
                    <ul>
                        <li><link to="/">Home</link></li>
                        <li><link to="/login">Login/SignUp</link></li>
                        <li><link to="/shelter">Nearby Shelter</link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;