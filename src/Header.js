import React, { Component } from 'react';
import { Link } from 'react-router'
import './index.css';


class Header extends Component {

    render() {
        return(
            <div className='header'>
                <ul>
                    <li className="header-list-item"><Link to="/about-me">About Me</Link></li>
                    <li className="header-list-item"><Link to="/experience">Experience</Link></li>
                    <li className="header-list-item"><Link to="/projects">Projects</Link></li>
                    <li className="header-list-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header
