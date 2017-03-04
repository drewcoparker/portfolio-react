import React, { Component } from 'react';
import Scroll, { Helpers } from 'react-scroll';

class Projects extends Component {

    render() {
        return(
            <div className="projects">
                <div className="container-fluid projects-container">
                    <div id="projects-header" className="section-header">Projects</div>
                </div>
            </div>
        )
    }
}

export default Helpers.Element(Projects);
