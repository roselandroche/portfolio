import React from 'react'
import { Link } from 'react-router-dom';
import '../css/NavBar.css'

function NavBar() {
    return (
        <div className="nav-container">
            <Link exact to='/' className="nav-link">HOME</Link>
            <Link to='/bio' className="nav-link">BIO</Link>
            <Link to='/skills' className="nav-link">SKILLS</Link>
            <Link to='/projects' className="nav-link">PROJECTS</Link>
            <Link to='/contact' className="nav-link">CONTACT</Link>
        </div>
    )
}

export default NavBar
