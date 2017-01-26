import React, { Component } from 'react';
import { Link } from 'react-router'
import './index.css';


class Header extends Component {

    render() {
        return(
            <div className='header'>
                <div className="flex-menu-container">
                    <div className="flex-menu-item"><Link to="/about-me">About Me</Link></div>
                    <div className="flex-menu-item"><Link to="/experience">Experience</Link></div>
                    <div className="flex-menu-item"><Link to="/projects">Projects</Link></div>
                    <div className="flex-menu-item"><Link to="/contact">Contact</Link></div>
                </div>

            </div>
        )
    }
}

export default Header

// <ul>
//     <li className="header-list-item"><Link to="/about-me">About Me</Link></li>
//     <li className="header-list-item"><Link to="/experience">Experience</Link></li>
//     <li className="header-list-item"><Link to="/projects">Projects</Link></li>
//     <li className="header-list-item"><Link to="/contact">Contact</Link></li>
// </ul>
