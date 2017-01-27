import React, { Component } from 'react';
import { Link } from 'react-router'


class Header extends Component {

    render() {
        return(
            <div className="header">
                <div className="header-container">

                    <div className="header-menu-item">
                        <Link to="/">Drew Parker</Link>
                    </div>
                    <div className="header-menu-item">
                        <Link to="/about-me"
                            activeStyle={{color: '#DA3935'}}>About Me</Link>
                    </div>
                    <div className="header-menu-item">
                        <Link to="/experience/professional"
                            activeStyle={{color: '#DA3935'}}>Experience</Link>
                    </div>
                    <div className="header-menu-item">
                        <Link to="/projects"
                            activeStyle={{color: '#DA3935'}}>Projects</Link>
                    </div>
                    <div className="header-menu-item">
                        <Link to="/contact"
                            activeStyle={{color: '#DA3935'}}>Contact</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
