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
                                        <div className="contact-card">
                                            <div className="contact-icon">
                                                <i className="fa fa-github fa-3x" aria-hidden="true"></i>
                                            </div>
                                            <div className="contact-card-text">
                                                <span>GitHub</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 linkedin">
                                        <div className="contact-card">
                                            <div className="contact-icon">
                                                <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                                            </div>
                                            <div className="contact-card-text">
                                                <span>LikedIn</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4 resume">
                                        <div className="contact-card">
                                            <div className="contact-icon">
                                                <i className="fa fa-file-pdf-o fa-3x" aria-hidden="true"></i>
                                            </div>
                                            <div className="contact-card-text">
                                                <span>Resume</span>
                                            </div>
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

export default Helpers.Element(Contact);
