import React, { Component } from 'react';

class About extends Component {

    render() {
        return(
            <div className="about-container">
                <p>Hi, I'm Drew Parker</p>
                <div className="about-blurb">
                    <p>
                        I'm a fullstack developer in Atlanta, GA. I have 5 years
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
        )
    }
}



export default About;
