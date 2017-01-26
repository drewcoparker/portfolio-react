import React, { Component } from 'react';
import { Link } from 'react-router'

import Education from './Education';
import Professional from './Professional';

class Experience extends Component {

    render() {
        return(
            <div className="experience-container">
                <div className="experience-menu">
                    <div className="experience-menu-item">
                        <Link to="/experience/professional">Professional</Link>
                    </div>
                    <div className="experience-menu-item">
                        <Link to="/experience/education">Education</Link>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}


export default Experience;
