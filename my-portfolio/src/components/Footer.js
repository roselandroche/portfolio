import React, { Match, Miss } from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
// import Home from './Home';
import '../css/Footer.css';

function Footer() {
    return (
        <div className='prof-links'>
            {/* <Match exactly pattern="/github" component={() => window.location = 'https://github.com/roselandroche'} >
                <GitHubIcon />
            </Match>
            <Miss component={ Home } /> */}
            <Link to='https://github.com/roselandroche' className='media'>
                <GitHubIcon />
            </Link>
            <Link to='https://www.linkedin.com/in/rose-landroche-8882b09b/' className='media'>
                <LinkedInIcon />
            </Link>
            <Link to='https://twitter.com/creatively_rose' className='media'>
                <TwitterIcon />
            </Link>
        </div>
    )
}

export default Footer
