import React, { Component } from 'react';
import { Helpers } from 'react-scroll';

class Contact extends Component {

    render() {
        return(
            <div className="contact">
                <div style={{backgroundColor: `#58355E`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#76597B`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#947E98`, width: `100%`, height: `5px`}}></div>
                <div className="container-fluid contact-container">
                    <div className="container item-wrapper">
                        <div className="row">
                            <div className="contact-item">
                                <div className="contact-title">Contact Me</div>
                                <hr></hr>
                                <div id="email">drew.i.parker@gmail.com</div>
                                
                                <div className="contact-card-wrapper">
                                    <div className="col-xs-12 col-sm-4 github">
                                        <a target="_blank" href="https://github.com/drewcoparker">
                                            <div className="contact-card">
                                                <div className="contact-icon">
                                                    <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                                                </div>
                                                <div className="contact-card-text">
                                                    <span>GitHub</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 linkedin">
                                        <a target="_blank" href="https://www.linkedin.com/in/drew-parker">
                                            <div className="contact-card">
                                                <div className="contact-icon">
                                                    <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                                                </div>
                                                <div className="contact-card-text">
                                                    <span>LikedIn</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 resume">
                                        <a target="_blank" href="./files/Drew_Parker_Resume_March_2017.pdf">
                                            <div className="contact-card">
                                                <div className="contact-icon">
                                                    <i className="fa fa-file-pdf-o fa-3x" aria-hidden="true"></i>
                                                </div>
                                                <div className="contact-card-text">
                                                    <span>Resume</span>
                                                </div>
                                            </div>
                                        </a>
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

export default Helpers.Element(Contact);
