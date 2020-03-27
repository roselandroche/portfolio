import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../css/Footer.css';

function Footer() {
    return (
        <div className='prof-links'>
            <a href='https://github.com/roselandroche' className='media'>
                <GitHubIcon />
            </a>
            <a href='https://www.linkedin.com/in/rose-landroche-8882b09b/' className='media'>
                <LinkedInIcon />
            </a>
            <a href='https://twitter.com/creatively_rose' className='media'>
                <TwitterIcon />
            </a>
        </div>
    )
}

export default Footer
