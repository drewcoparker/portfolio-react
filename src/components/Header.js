import React, { Component } from 'react';
import { Link } from 'react-router'


class Header extends Component {

    render() {
        return(
            <div className='header'>
                <div className="flex-menu-container">
                    <div className="flex-menu-item"><Link to="/about-me">About Me</Link></div>
                    <div className="flex-menu-item"><Link to="/experience/professional">Experience</Link></div>
                    <div className="flex-menu-item"><Link to="/projects">Projects</Link></div>
                    <div className="flex-menu-item"><Link to="/contact">Contact</Link></div>
                </div>

            </div>
        )
    }
}

export default Header
