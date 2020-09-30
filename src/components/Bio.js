import React from 'react';
import '../css/Bio.css';
import NavBar from './NavBar';

function Bio() {
    return (
        <div>
            <NavBar />
            <div className='cards'>
                <div className='mission'>
                    <h1>Mission Statement:</h1>
                    <p className='bio-p'>
                        To continually learn, grow, and live with integrity.
                    </p>
                </div>
                <div className='bio'>
                    <h1>About me:</h1>
                    <p className='bio-p'>
                        My name is Rose Landroche. I am a Full Stack Web Developer based out of Vancouver British Columbia. 
                    </p>
                    <p className='bio-p'>
                        I have over ten years of experience in customer service industries, growing soft skills such as communication
                        and teamwork.
                    </p>
                    <p className='bio-p'>
                        I began learning to program on my own in 2018, and pursued organized learning through Lambda School in 2019. 
                    </p>
                    <p className='bio-p'>
                        Programming has become one of the ways I channel my appreciation for logic and creativity. I look forward
                        to learning more new technologies and creating spectacular new things over the course of my career.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bio;