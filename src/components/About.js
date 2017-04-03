import React, { Component } from 'react';
import { Helpers } from 'react-scroll';

class About extends Component {

    render() {
        return(
            <div className="about">
                <div style={{backgroundColor: `#3993DD`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#5DA6E3`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#81BAE9`, width: `100%`, height: `5px`}}></div>
                <div className="container-fluid about-container">
                    <div className="container item-wrapper">
                        <div className="row">
                            <div className="about-item">
                                <div className="about-img">
                                    <img
                                        src={require("../images/drew_circle.png")}
                                        role={"presentation"}
                                    />
                                </div>
                                <div className="name">Drew I. Parker</div>
                                <div className="title">Fullstack Web Developer</div>
                                <hr></hr>
                                <div className="about-blurb">
                                    <p>
                                        I'm a Fullstack web developer with 5 previous
                                        years of experience in quality assurance.
                                        I'm highly motivated, imaginative, observant,
                                        and empathic. I have excellent critical thinking
                                        and information synthesis skills and I possess
                                        an MS Degree in Geographic Information Science.
                                    </p>
                                </div>
                                <div className="skills">
                                    <p id="skills-title">Competencies: </p>
                                    <div className="skills-container">
                                        <div className="skills-1">
                                            <div>ES6 Javascript</div>
                                            <div>HTML5, CSS3, & jQuery</div>
                                            <div>React & Redux</div>
                                            <div>Bootstrap & Sass</div>
                                            <div>Node.js, Express.js, & NPM</div>
                                            <div>Resutful APIs</div>
                                        </div>
                                        <div className="skills-2">
                                            <div>Automation testing</div>
                                            <div>Restful APIs</div>
                                            <div>Python</div>
                                            <div>Google Maps & MapBox APIs</div>
                                            <div>Remote Sensing</div>
                                            <div>GIS & Cartography</div>
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

export default Helpers.Element(About);
