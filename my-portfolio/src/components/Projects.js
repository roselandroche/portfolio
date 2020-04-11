import React from 'react';
import NavBar from './NavBar';

function Projects() {
    return (
        <div>
            <NavBar />
            <h1>Project 1: Water My Plants</h1>
            <p>
                A landing page utilizing CSS, LESS, HTML, and JavaScript showcasing an application to
                help users care for plants.
            </p>
            <a href='https://hopeful-villani-ed8e0d.netlify.com/index.html'>
                <p>Deployed Site</p>
            </a>

            <h1>Project 2: Pintereach</h1>
            <p>
                An application built with a cross functional team, utilizing React 
                in order to give users the ability to save articles to be read at a later date.
            </p>
            <a href='https://eloquent-mcnulty-a0dd5b.netlify.com/'>
                <p>Deployed Site</p>
            </a>
        </div>
    )
}

export default Projects;