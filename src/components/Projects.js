import React, { Component } from 'react';
import { Helpers } from 'react-scroll';

class Projects extends Component {

    render() {
        return(
            <div className="projects">
                <div style={{backgroundColor: `#7CA982`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#93B898`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#ABC8AF`, width: `100%`, height: `5px`}}></div>
                <div className="container-fluid projects-container">
                    <div className="container item-wrapper">
                        <div className="row">
                            <div id="movie" className="project-item">

                            </div>

                            <div id="ebay" className="project-item">

                            </div>

                            <div id="geo" className="project-item">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Helpers.Element(Projects);
