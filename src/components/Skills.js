import React from 'react';
import NavBar from './NavBar';
import '../css/Skills.css';

function Skills() {
    return (
        <>
            <NavBar />
            <div className='skills'>
                <h1>Technical Skills</h1>
                <p>Node.js</p>
                <p>SQL, SQLite</p>
                <p>Express</p>
                <p>Knex.js</p>
                <p>Redux</p>
                <p>React.js</p>
                <p>JavaScript</p>
                <p>CSS, Less, Sass</p>
                <p>HTML</p>
            </div>
        </>
    )
}

export default Skills;