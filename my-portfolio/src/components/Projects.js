import React from 'react';
import NavBar from './NavBar';

function Projects() {
    return (
        <div>
            <NavBar />
            <h1>Project 1: Gardening App Marketing Page</h1>
            <p>
                A landing page utilizing CSS, LESS, HTML, and JavaScript.
            </p>
            <a href='https://hopeful-villani-ed8e0d.netlify.com/index.html'>
                <img src = '../WaterPlants.png' alt = 'Screenshot of landing page'></img>
            </a>

            <h1>Project 2</h1>
            <p>Concise Description</p>
            <p>Deployed Link</p>
        </div>
    )
}

export default Projects;