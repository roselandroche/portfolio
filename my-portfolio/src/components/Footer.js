import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <div>
            <Link to='https://github.com/roselandroche'>
                <GitHubIcon />
            </Link>
            <Link to='https://www.linkedin.com/in/rose-landroche-8882b09b/'>
                <LinkedInIcon />
            </Link>
            <Link to='https://twitter.com/creatively_rose'>
                <TwitterIcon />
            </Link>
        </div>
    )
}

export default Footer
