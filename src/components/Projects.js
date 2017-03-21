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
                                <div className="project-title">Movies</div>
                                <hr></hr>
                                <div className="hidden-xs col-sm-6 project-img">
                                    <img
                                        src={require("../images/movie_app_4.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="hidden-sm hidden-md hidden-lg col-xs-12 project-img-sm">
                                    <img
                                        src={require("../images/movie_app_4.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="col-xs-12 col-sm-6 project-content-wrapper">
                                    <div className="project-content"></div>
                                </div>
                            </div>

                            <div id="ebay" className="project-item">
                                <div className="project-title">Ebay Clone</div>
                                <hr></hr>
                                <div className="hidden-xs col-sm-6 project-img">
                                    <img
                                        src={require("../images/movie_app_2.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="hidden-sm hidden-md hidden-lg col-xs-12 project-img-sm">
                                    <img
                                        src={require("../images/movie_app_3.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="col-xs-12 col-sm-6 project-content-wrapper">
                                    <div className="project-content"></div>
                                </div>
                            </div>

                            <div id="geo" className="project-item">
                                <div className="project-title">GeoQuiz</div>
                                <hr></hr>
                                <div className="hidden-xs col-sm-6 project-img">
                                    <img
                                        src={require("../images/movie_app_2.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="hidden-sm hidden-md hidden-lg col-xs-12 project-img-sm">
                                    <img
                                        src={require("../images/movie_app_3.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="col-xs-12 col-sm-6 project-content-wrapper">
                                    <div className="project-content"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Helpers.Element(Projects);
