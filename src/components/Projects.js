import React, { Component } from 'react';
import Scroll, { Helpers } from 'react-scroll';

class Projects extends Component {

    render() {
        return(
            <div className="projects">
                <div className="container projects-container">
                    <div className="section-header">Projects</div>
                </div>
            </div>
        )
    }
}

export default Helpers.Element(Projects);
