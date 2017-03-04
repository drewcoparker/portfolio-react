import React, { Component } from 'react';
import Scroll, { Helpers } from 'react-scroll';

class Home extends Component {
    render(){
        return(
            <div className="home">
                <div className="home-menu"></div>
                <div className="home-container">
                    <div className="home-text">I&#39;m Drew Parker</div>
                </div>
            </div>
        )
    }
}

export default Helpers.Element(Home);
