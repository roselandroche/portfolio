import React from 'react';
import NavBar from './NavBar';
import '../css/Projects.css';
import WaterPlants from '../WaterPlants.png';
import Pintereach from '../Pintereach.png';
import BuildSauti from '../BuildSautiStudio.png';
import SaveThisJob from '../SaveThisJob.png';
import GameOfLife from '../GameOfLife.png';

function Projects() {
    return (
        <div>
            <NavBar />
            <div className='projectCard'>
                <h1 className='project-title'>Conway's Game of Life</h1>
                <div className='project-subtitle'>
                    <h2 className='tech-stack'>Role: Full Stack Web Developer</h2>
                    <h2 className='tech-stack'>Tech Stack: React, JavaScript, CSS</h2>
                </div>
                <p className='project-content'>
                    A single page application showcasing John Conway's historic Game of Life. 
                </p>
                <a href='https://awesome-ramanujan-7d7ef5.netlify.app/'>
                    <img src={GameOfLife} alt='Screenshot of game of life' className='screenshot' />
                </a>
            </div>
            <div className='projectCard'>
                <h1 className='project-title'>Save This Job</h1>
                <div className='project-subtitle'>
                    <h2 className='tech-stack'>Role: Back End Developer</h2>
                    <h2 className='tech-stack'>Tech Stack: Node, Express, Knex, SQLite, Postgres</h2>
                </div>
                <p className='project-content'>
                    A back end for an application built with a cross functional team, utilizing Node.js and Knex
                    in order to give users the ability to save job postings and related information as they search
                    for their new career. 
                </p>
                <a href='https://savethisjob.com'>
                    <img src={SaveThisJob} alt='Screenshot of database' className='screenshot' />
                </a>
            </div>
            <div className='projectCard'>
                <h1 className='project-title'>Build Sauti Studio</h1>
                <div className='project-subtitle'>
                    <h2 className='tech-stack'>Role: Back End Developer</h2>
                    <h2 className='tech-stack'>Tech Stack: Node, Express, Knex, SQLite, Postgres</h2>
                </div>
                <p className='project-content'>
                    A back end for an application built with a cross functional team, utilizing Node.js and Knex
                    in order to give users the ability to save and share technical projects with like-minded
                    people. 
                </p>
                <a href='https://github.com/roselandroche/Back-end'>
                    <img src={BuildSauti} alt='Screenshot of database' className='screenshot' />
                </a>
            </div>
            <div className='projectCard'>
                <h1 className='project-title'>Pintereach</h1>
                <div className='project-subtitle'>
                    <h2 className='tech-stack'>Role: Front End Developer</h2>
                    <h2 className='tech-stack'>Tech Stack: React, Redux</h2>
                </div>
                <p className='project-content'>
                    An application built with a cross functional team, utilizing React and Redux
                    in order to give users the ability to save articles to be read at a later date.
                </p>
                <a href='https://eloquent-mcnulty-a0dd5b.netlify.com/'>
                    <img src={Pintereach} alt='Screenshot of application' className='screenshot' />
                </a>
            </div>
            <div className='projectCard'>
                <h1 className='project-title'>Water My Plants</h1>
                <div className='project-subtitle'>
                    <h2 className='tech-stack'>Role: Front End Developer</h2>
                    <h2 className='tech-stack'>Tech Stack: HTML, CSS, JavaScript</h2>
                </div>
                <p className='project-content'>
                    A landing page utilizing CSS, LESS, HTML, and JavaScript showcasing an application to
                    help users care for plants.
                </p>
                <a href='https://hopeful-villani-ed8e0d.netlify.com/index.html'>
                    <img src={WaterPlants} alt='Screenshot of landing page' className='screenshot' />
                </a>
            </div>
        </div>
    )
}

export default Projects;