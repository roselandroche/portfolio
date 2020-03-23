import React from 'react';
import '../css/Home.css';
import logo from '../logo.png';
import NavBar from './NavBar';
// import HomeIcon from '@material-ui/icons/Home';

function Home() {
    return (
        <div>
            <NavBar />
            <header className="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}

export default Home;