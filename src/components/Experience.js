import React, { Component } from 'react';
import { Helpers } from 'react-scroll';

class Experience extends Component {

    render() {
        return(
            <div className="experience">
                <div className="container-fluid experience-container">
                    <div className="container item-wrapper">
                        <div className="row">
                            <div className="work-item">
                                <div className="work-img">
                                    <img
                                        src={require("../images/scaled_digitalcrafts_logo.png")}
                                        role={"presentation"}
                                    />
                                </div>
                                <hr></hr>
                                <div className="title">Fullstack Developer Apprentice</div>
                                <div className="years">Nov 2016 - Mar 2017 (4 months)</div>
                            </div>

                            <div className="work-item">
                                <div className="work-img">
                                    <img
                                        src={require("../images/scaled_sketchup_logo.png")}
                                        role={"presentation"}
                                    />
                                </div>
                                <hr></hr>
                                <div className="title">Quality Assurance Engineer</div>
                                <div className="years">Oct 2012 - April 2016 (3 years, 7 months)</div>
                            </div>

                            <div className="work-item">
                                <div className="work-img">
                                    <img
                                        src={require("../images/scaled_intergraph_logo.png")}
                                        role={"presentation"}
                                    />
                                </div>
                                <hr></hr>
                                <div className="title">Quality Assurance Engineer</div>
                                <div className="years">Oct 2011 - Oct 2012 (1 year)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Helpers.Element(Experience);


// <div className="experience-container">
//
//     <div className="experience-menu">
//         <div className="experience-menu-item">
//             <Link to="/experience/professional"
//                 activeStyle={{color: '#DA3935'}}>Professional</Link>
//         </div>
//         <div className="experience-menu-item">
//             <Link to="/experience/education"
//                 activeStyle={{color: '#DA3935'}}>Education</Link>
//         </div>
//     </div>
//     {this.props.children}
// </div>
// <ul>
//     <li>
//         Mastering frontend design and development
//         principles using HTML5, CSS3, and Javascript,
//         JQuery, React.js, and Bootstrap.css
//     </li>
//     <li>
//         Daily participation at pair-programming,
//         algorithm development, and code integration
//     </li>
//     <li>
//         Backend technologies including Apache Servers,
//         SQL and NoSQL databases, Node.js, Python, and
//         Express
//     </li>
// </ul>
