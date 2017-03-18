import React, { Component } from 'react';
import { Helpers } from 'react-scroll';

class Contact extends Component {

    render() {
        return(
            <div className="contact">
                <div style={{backgroundColor: `#3993DD`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#5DA6E3`, width: `100%`, height: `5px`}}></div>
                <div style={{backgroundColor: `#81BAE9`, width: `100%`, height: `5px`}}></div>
                <div className="container-fluid contact-container">

                </div>
            </div>
        )
    }
}

export default Helpers.Element(Contact);
