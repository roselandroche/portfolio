import React from 'react';
import NavBar from './NavBar';
import '../css/Skills.css';

function Skills() {
    return (
        <>
            <NavBar />
            
            <div className='skills-card'>
                <h1>Technical Skills</h1>
                <p className='skill'>Algorithms</p>
                <p className='skill'>Python</p>
                <p className='skill'>Jest, Supertest</p>
                <p className='skill'>Node.js</p>
                <p className='skill'>SQL, SQLite</p>
                <p className='skill'>Express</p>
                <p className='skill'>Knex.js</p>
                <p className='skill'>Redux</p>
                <p className='skill'>React.js</p>
                <p className='skill'>JavaScript</p>
                <p className='skill'>CSS, Less, Sass</p>
                <p className='skill'>HTML</p>
            </div>
        </>
    )
}

export default Skills;