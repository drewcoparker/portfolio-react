import React from 'react';

function Education() {
    return(
        <div className="edu-container">
            <div className="edu-item">
                <img className="edu-img"
                     src={require("../images/digitalcrafts-logo.png")}
                     role={"presentation"} />
                <p>Fullstack Web Development</p>
                <p>Graduated March 2017</p>
            </div>
            <div className="edu-item">
                <img className="edu-img"
                     src={require("../images/uga-logo.png")}
                     role={"presentation"} />
                <p>Master of Science in Geography</p>
                <p>Graduated August 2011</p>
                <ul>
                    <li>
                        Honors: Wormsloe Institute for Environmental History
                        Fellowship
                    </li>
                    <li>
                        Thesis title: Assessing the Performance of Two Non-Commercial
                        Bare Earth Classification Algorithms for LiDAR Data Sets
                        within the Southern Appalachians
                    </li>
                </ul>
            </div>
            <div className="edu-item">
                <img className="edu-img"
                     src={require("../images/uga-logo.png")}
                     role={"presentation"} />
                <p>Bachelor of Science in Geography</p>
                <p>Graduated May 2009</p>
                <ul>
                    <li>
                        Certificate in Geographic Information Science
                    </li>
                    <li>
                        Secretary of the ASPRS student chapter at UGA
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Education;
