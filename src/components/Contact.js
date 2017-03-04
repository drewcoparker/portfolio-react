import React, { Component } from 'react';
import Scroll, { Helpers } from 'react-scroll';

class Contact extends Component {

    render() {
        return(
            <div className="contact">
                <div className="container-fluid contact-container">
                    <div id="contact-header" className="section-header">Contact</div>
                </div>
            </div>
        )
    }
}

export default Helpers.Element(Contact);
