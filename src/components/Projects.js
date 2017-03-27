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
                                <div className="project-title">Trailers</div>
                                <hr></hr>
                                <div className="hidden-xs col-sm-6 project-img">
                                    <img
                                        className="img-responsive"
                                        src={require("../images/movie_app_4.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="hidden-sm hidden-md hidden-lg col-xs-12 project-img-sm">
                                    <img
                                        className="img-responsive"
                                        src={require("../images/movie_app_4.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="col-xs-12 col-sm-6 project-content-wrapper">
                                    <div className="project-content">
                                        <span>
                                            Trailers is an app that lets movie lover
                                            browse now playing and upcoming movies
                                            and quickly view their trailers. The
                                            trailers are presented in a modal, so it's
                                            quite easy to start one, dismiss it, and
                                            move on to the next.
                                        </span>
                                        <br></br>
                                        <br></br>
                                        <span>
                                            Movies are displayed on handsome
                                            cards featuring the poster, director,
                                            runtime, and the mpaa rating. The
                                            Movie Database provides the API.
                                        </span>
                                        <br></br>
                                        <br></br>
                                        <div id="tech-title">Technologies:</div>
                                        <div className="project-tech">
                                            <div className="tech-item"><span>React</span></div>
                                            <div className="tech-item"><span>Redux</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div id="ebay" className="project-item">
                                <div className="project-title">Ebay Clone</div>
                                <hr></hr>
                                <div className="hidden-xs col-sm-6 project-img">
                                    <img
                                        className="img-responsive"
                                        src={require("../images/ebay.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="hidden-sm hidden-md hidden-lg col-xs-12 project-img-sm">
                                    <img
                                        className="img-responsive"
                                        src={require("../images/ebay.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="col-xs-12 col-sm-6 project-content-wrapper">
                                    <div className="project-content">
                                        This
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div id="geo" className="project-item">
                                <div className="project-title">AtlantaVibes</div>
                                <hr></hr>
                                <div className="hidden-xs col-sm-6 project-img">
                                    <img
                                        className="img-responsive"
                                        src={require("../images/vibes.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="hidden-sm hidden-md hidden-lg col-xs-12 project-img-sm">
                                    <img
                                        className="img-responsive"
                                        src={require("../images/vibes.png")}
                                        role={"presentation"} />
                                </div>
                                <div className="col-xs-12 col-sm-6 project-content-wrapper">
                                    <div className="project-content">
                                        AtlantaVibes is a full-stack application
                                        that aggregates data from the top music
                                        festivals, in Atlanta, into one easy to
                                        use website. AtlantaVibes lets users view,
                                        rate and comment on their favorite festivals
                                        in Atlanta.
                                    </div>
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
