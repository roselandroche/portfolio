import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import logo from '../logo.svg';

function Home() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="home-options">
                <Link to='/bio' className="home-button">BIO</Link>
                <Link to='/skills' className="home-button">SKILLS</Link>
                <Link to='/projects' className="home-button">PROJECTS</Link>
                <Link to='/contact' className="home-button">CONTACT</Link>
            </div>
        </div>
    )
}

export default Home;