import React from 'react';
import '../css/Home.css';
import logo from '../logo.png';
import rose_avatar from '../rose_avatar.png';
import NavBar from './NavBar';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <NavBar />
            <p className="header">
                <img src={rose_avatar} className="logo" alt="avatar" />
                <img src={logo} className="logo" alt="logo" />
            </p>
            <Footer />
        </div>
    )
}

export default Home;