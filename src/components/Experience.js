import React, { Component } from 'react';
import { Helpers } from 'react-scroll';

class Experience extends Component {

    render() {
        return(
            <div className="experience">
                <div style={{backgroundColor: `#BA160C`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#C64038`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#D36A64`, width: `100%`, height: `5px`}}></div>
                <div className="container-fluid experience-container">
                    <div className="container item-wrapper">
                        <div className="row">
                            <div id="digitalcrafts" className="work-item">
                                <div className="work-img">
                                    <img
                                        src={require("../images/scaled_digitalcrafts_logo.png")}
                                        role={"presentation"}
                                    />
                                </div>

                                <div className="title">Apprentice Fullstack Web Developer</div>
                                <div className="years">Nov 2016 - Mar 2017 (4 months)</div>
                                <hr></hr>
                                <div className="row">
                                    <div className="hidden-xs col-xs-12 col-sm-6 resume-wrapper">
                                        <div className="resume-item">
                                            Produce fullstack web applications with React/Redux
                                            on the frontend and Express/Node.js with MySql or
                                            Mongodb on the backend.
                                        </div>
                                        <div className="resume-item">
                                            Utilize modern UX/UI design principles to make
                                            frontends elegant, intuitive, and responsive with
                                            CSS and Javascript libraries such as Bootstrap and jQuery.
                                        </div>
                                        <div className="resume-item">
                                            Code deployment using AWS onto virtual Apache web servers.
                                        </div>
                                        <div className="resume-item">
                                            Object-oriented approach to 2d game development in
                                            both Python and Javascript/HTML Canvas.
                                        </div>
                                        <div className="resume-item">
                                            Integration using Git/GitHub
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-5 col-sm-offset-1 skills-wrapper">
                                        <ul>
                                            <li>MERN stack</li>
                                            <li>ES6 Javascript</li>
                                            <li>React with Redux</li>
                                            <li>Express.js</li>
                                            <li>NPM</li>
                                            <li>jQuery</li>
                                            <li>Bootstrap.css</li>
                                            <li>Python</li>
                                            <li>Sass</li>
                                            <li>MySql</li>
                                            <li>AWS</li>
                                            <li>Google Maps and Mapbox APIs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div id="sketchup" className="work-item">
                                <div className="work-img">
                                    <img
                                        src={require("../images/scaled_sketchup_logo.png")}
                                        role={"presentation"}
                                    />
                                </div>

                                <div className="title">Quality Assurance Engineer</div>
                                <div className="years">Oct 2012 - April 2016 (3 years, 7 months)</div>
                                <hr></hr>
                                <div className="row">
                                    <div className="hidden-xs col-sm-6 resume-wrapper">
                                        <div className="resume-item">
                                            Led testing efforts for the LayOut
                                            application for Mac and Windows in a
                                            modern, Agile-based development environment.
                                        </div>
                                        <div className="resume-item">
                                            Logged thousands of tickets for bugs,
                                            improvements, and feature requests using Jira.
                                        </div>
                                        <div className="resume-item">
                                            Administered SketchUp’s beta program
                                            and oversaw its growth to well over 500 members.
                                        </div>
                                        <div className="resume-item">
                                            Authored hundreds of unit tests in
                                            preparation for LayOut’s public API
                                            release using Google’s C++ test framework.
                                        </div>
                                        <div className="resume-item">
                                            Developed an image diffing program in
                                            Ruby and RMagick to assist developers
                                            while tuning LayOut’s pdf exporting engine.
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-5 col-sm-offset-1 skills-wrapper">
                                        <ul>
                                            <li>Ruby</li>
                                            <li>MacOs</li>
                                            <li>Jira</li>
                                            <li>Sikuli (automation by computer vision)</li>
                                            <li>Unit tests</li>
                                            <li>Perforce (version control)</li>
                                            <li>Continuous integration</li>
                                            <li>Beta site administration</li>
                                            <li>VMware and Parallels</li>
                                            <li>Google Docs</li>
                                            <li>Localization testing</li>
                                            <li>Agile methodology</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div id="intergraph" className="work-item">
                                <div className="work-img">
                                    <img
                                        src={require("../images/scaled_intergraph_logo.png")}
                                        role={"presentation"}
                                    />
                                </div>

                                <div className="title">Quality Assurance Engineer</div>
                                <div className="years">Oct 2011 - Oct 2012 (1 year)</div>
                                <hr></hr>
                                <div className="row">
                                    <div className="hidden-xs col-sm-6 resume-wrapper">
                                        <div className="resume-item">
                                            Led testing efforts for Geomedia Professional
                                            within an Agile (Scrum) development environment.
                                        </div>
                                        <div className="resume-item">
                                            Authored a corpus of GUI-level automation
                                            test cases in VBScript and HP Quality Center.
                                        </div>
                                        <div className="resume-item">
                                            Prepared spatial databases and designed
                                            custom schemas for data ingestion testing.
                                        </div>
                                        <div className="resume-item">
                                            Point of contact for a QA team in India.
                                        </div>
                                        <div className="resume-item">
                                            Communicated ideas and concerns in
                                            monthly planning meetings. Presented
                                            results in Sprint-ending retrospectives.
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-5 col-sm-offset-1 skills-wrapper">
                                        <ul>
                                            <li>HP Quality Center</li>
                                            <li>VBScript</li>
                                            <li>Scrum agile methodology</li>
                                            <li>Spatial databases</li>
                                            <li>PowerShell</li>
                                            <li>GIS libraries</li>
                                            <li>Satellite image processing</li>
                                            <li>Test automation</li>
                                            <li>Test plan creation</li>
                                            <li>Sprint planning</li>
                                            <li>Jira Greenhopper</li>
                                            <li>Microsoft Office</li>
                                        </ul>
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

export default Helpers.Element(Experience);
