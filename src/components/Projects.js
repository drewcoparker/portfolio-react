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
                                <div className="project-header">
                                    <div className="project-title"><span>Trailers</span>
                                        <div className="project-sub-title">An app to view movie trailers</div>
                                    </div>
                                    <div className="github-repo">
                                        <a target="_blank" href="https://github.com/drewcoparker/movie-app-reactified">
                                            <div><span>GitHub</span></div>
                                        </a>
                                    </div>
                                </div>
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
                                            &nbsp;
                                            Trailers is an app that lets movie lovers
                                            browse now playing and upcoming movies
                                            and quickly view their trailers. The
                                            trailers are presented in a modal, so it's
                                            quite easy to start one, dismiss it, and
                                            move on to the next.
                                        </span>
                                        <br></br>
                                        <br></br>
                                        <span>
                                            &nbsp;
                                            Movies are displayed on handsome
                                            cards featuring the poster, director,
                                            runtime, and the mpaa rating. The
                                            Movie Database provides the API.
                                        </span>
                                        <hr></hr>
                                        <div id="tech-title"><span>Tech used</span></div>
                                        <div className="project-tech">
                                            <div className="tech-card"><span>React</span></div>
                                            <div className="tech-card"><span>Redux</span></div>
                                            <div className="tech-card"><span>AJAX</span></div>
                                            <div className="tech-card"><span>RESTful APIs</span></div>
                                            <div className="tech-card"><span>jQuery</span></div>
                                            <div className="tech-card"><span>Bootstrap</span></div>
                                            <div className="tech-card"><span>React-Router</span></div>
                                            <div className="tech-card"><span>ES6</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div id="ebay" className="project-item">
                                <div className="project-header">
                                    <div className="project-title"><span>Auctioneer</span>
                                        <div className="project-sub-title">An auction site</div>
                                    </div>
                                    <div className="github-repo">
                                        <a target="_blank" href="https://github.com/drewcoparker/Auctioneer">
                                            <div><span>GitHub</span></div>
                                        </a>
                                    </div>
                                </div>

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
                                        <span>
                                            &nbsp;
                                            Auctioneer is an ecommerce platform
                                            that people can use to sell and buy
                                            used goods. Similar to Ebay, Auctioneer
                                            allows users to bid anytime while
                                            logged in. The highest bidder wins!
                                        </span>
                                        <br></br>
                                        <br></br>
                                        <span>
                                            &nbsp;
                                            Auction items are displayed on nicely
                                            styled cards. Each item has a photo,
                                            a description, its current bid price, a description,
                                            and an expiration date. Items can also
                                            be filtered by category.
                                        </span>
                                        <hr></hr>
                                        <div id="tech-title"><span>Tech used</span></div>
                                        <div className="project-tech">
                                            <div className="tech-card"><span>React</span></div>
                                            <div className="tech-card"><span>Redux</span></div>
                                            <div className="tech-card"><span>Express.js</span></div>
                                            <div className="tech-card"><span>Node.js</span></div>
                                            <div className="tech-card"><span>MySql</span></div>
                                            <div className="tech-card"><span>jQuery</span></div>
                                            <div className="tech-card"><span>Bootstrap</span></div>
                                            <div className="tech-card"><span>ES6</span></div>
                                            <div className="tech-card"><span>React-Router</span></div>
                                            <div className="tech-card"><span>RESTful API</span></div>
                                            <div className="tech-card"><span>localstorage</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div id="geo" className="project-item">
                                <div className="project-header">
                                    <div className="project-title"><span>AtlantaVibes</span>
                                        <div className="project-sub-title">Get info on Atlanta's music festivals</div>
                                    </div>
                                    <div className="github-repo">
                                        <a target="_blank" href="https://github.com/drewcoparker/AtlantaVibes">
                                            <div><span>GitHub</span></div>
                                        </a>
                                    </div>
                                </div>
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
                                        <span>
                                            &nbsp;
                                            AtlantaVibes is a full-stack application
                                            that aggregates data from the top music
                                            festivals, in Atlanta, into one easy to
                                            use website. AtlantaVibes lets users view,
                                            rate and comment on their favorite festivals
                                            in Atlanta.
                                        </span>
                                        <hr></hr>
                                        <div id="tech-title"><span>Tech used</span></div>
                                        <div className="project-tech">
                                            <div className="tech-card"><span>React</span></div>
                                            <div className="tech-card"><span>Redux</span></div>
                                            <div className="tech-card"><span>Express.js</span></div>
                                            <div className="tech-card"><span>Node.js</span></div>
                                            <div className="tech-card"><span>MySql</span></div>
                                            <div className="tech-card"><span>jQuery</span></div>
                                            <div className="tech-card"><span>Bootstrap</span></div>
                                            <div className="tech-card"><span>ES6</span></div>
                                            <div className="tech-card"><span>NPM</span></div>
                                            <div className="tech-card"><span>Sass</span></div>
                                            <div className="tech-card"><span>React-Router</span></div>
                                        </div>
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
