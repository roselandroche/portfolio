import React from 'react';
import '../css/Bio.css';
import NavBar from './NavBar';

function Bio() {
    return (
        <div>
            <NavBar />
            <div className='bio'>
                <h1>A little about me:</h1>
                <p>
                    My name is Rose Landroche and I am a Full Stack Web Developer. I have over ten years of experience
                    in customer facing industries such as retail and customer service. I began learning to program on
                    my own in 2018, and pursued organized learning through Lambda School in 2019. Programming has become 
                    one of the ways I channel my appreciation for logic, as well as creating new things. I look forward
                    to learning more new technologies and creating spectacular new things over the course of my career.
                </p>
                {/* <h1>Mission Statement:</h1>
                <p>
                    To actively improve the world, by working for and with like-minded 
                    people, so that I leave the world better than I found it.
                </p> */}
            </div>
        </div>
    )
}

export default Bio;