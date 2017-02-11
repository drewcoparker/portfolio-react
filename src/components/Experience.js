import React, { Component } from 'react';
import { Link } from 'react-router'

class Experience extends Component {

    render() {
        return(
            <div className="work-container">
                <div className="work-item">
                    <img className="work-img"
                         src={require("../images/digitalcrafts-logo.png")}
                         role={"presentation"} />
                    <p>Fullstack Developer in Training</p>
                    <p>Nov 2016 - Mar 2017</p>
                    <ul>
                        <li>
                            Mastering frontend design and development
                            principles using HTML5, CSS3, and Javascript,
                            JQuery, React.js, and Bootstrap.css
                        </li>
                        <li>
                            Daily participation at pair-programming,
                            algorithm development, and code integration
                        </li>
                        <li>
                            Backend technologies including Apache Servers,
                            SQL and NoSQL databases, Node.js, Python, and
                            Express
                        </li>
                    </ul>
                </div>
                <div className="work-item">
                    <img className="work-img"
                         src={require("../images/sketchup-logo.png")}
                         role={"presentation"} />
                    <p>Quality Assurance Engineer</p>
                    <p>Oct 2012 - April 2016</p>
                    <ul>
                        <li>
                            Led testing efforts for the LayOut application
                            for Mac and Windows
                        </li>
                        <li>
                            Achieved mastery of white and black box testing
                            methods
                        </li>
                        <li>
                            Authored hundreds of unit tests in C++
                        </li>
                        <li>
                            Opened thousands of tickets for bugs, improvements,
                            and feature requests
                        </li>
                        <li>
                            Co-developed example applications as a way of
                            providing documentation for the LayOut C API
                        </li>
                        <li>
                            Administered SketchUp&#39;s beta program and oversaw
                            its growth to well over 500 members
                        </li>
                        <li>
                            Developed an image diffing program in Ruby to
                            assist developers while tuning LayOut&#39;s pdf
                            exporting engine
                        </li>
                        <li>
                            Participated as a mentor in SketchUp&#39;s Autism
                            Internship Program
                        </li>
                    </ul>
                </div>
                <div className="work-item">
                    <img className="work-img"
                         src={require("../images/intergraph-logo.png")}
                         role={"presentation"} />
                     <p>Quality Assurance Engineer</p>
                    <p>Oct 2011 - Oct 2012</p>
                    <ul>
                        <li>
                            Led testing efforts for Geomedia Professional
                            within an Agile (Scrum) development environment
                        </li>
                        <li>
                            Authored a corpus of GUI-level automation test
                            cases in VBScript and HP Quality Center
                        </li>
                        <li>
                            Prepared spatial databases and designed custom
                            schemas for data ingestion testing
                        </li>
                        <li>
                            Communicated ideas in monthly planning meetings
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Experience;


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
