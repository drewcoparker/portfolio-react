import React, { Component } from 'react';
import { Link } from 'react-router'

class Experience extends Component {

    render() {
        return(
            <div className="experience-container">

                <div className="experience-menu">
                    <div className="experience-menu-item">
                        <Link to="/experience/professional"
                            activeStyle={{color: '#DA3935'}}>Professional</Link>
                    </div>
                    <div className="experience-menu-item">
                        <Link to="/experience/education"
                            activeStyle={{color: '#DA3935'}}>Education</Link>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}


export default Experience;
