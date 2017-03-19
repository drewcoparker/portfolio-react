import React, { Component } from 'react';
import { Helpers } from 'react-scroll';

class About extends Component {

    render() {
        return(
            <div className="about">
                <div style={{backgroundColor: `#000000`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#2E2E2E`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#5C5C5C`, width: `100%`, height: `5px`}}></div>
                <div className="container-fluid about-container">
                    <div className="container item-wrapper">
                        <div className="row">

                            <div id="digitalcrafts" className="about-item">
                                <div className="about-img">
                                    <img
                                        src={require("../images/drew_bust.png")}
                                        role={"presentation"}
                                    />
                                </div>
                                <div className="title">Apprentice Fullstack Web Developer</div>
                                <hr></hr>
                                <div className="about-blurb">
                                    <p>
                                        I&#39;m a fullstack developer in Atlanta, GA. I have 5 years
                                        of experience as a Quality Assurance Engineer well as a
                                        Master of Science Degree in GIS.
                                    </p>
                                </div>
                                <div className="skills">
                                    <p id="skills-title">My skills include: </p>
                                    <div className="skills-container">
                                        <div className="skills-1">
                                            <div>HTLM5 & CSS3</div>
                                            <div>Javascript & jQuery</div>
                                            <div>React</div>
                                            <div>Sass</div>
                                            <div>Node.js</div>
                                        </div>
                                        <div className="skills-2">
                                            <div>Automation testing</div>
                                            <div>Ruby</div>
                                            <div>Python</div>
                                            <div>Remote Sensing</div>
                                            <div>Cartography</div>
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
