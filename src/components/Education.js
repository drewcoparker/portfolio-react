import React from 'react';
import { Helpers } from 'react-scroll';

function Education() {
    return(
        <div className="education">
            <div className="container-fluid edu-container">
                <div className="item-wrapper">
                    <div className="edu-item">
                        <img className="edu-img"
                             src={require("../images/uga-logo.png")}
                             role={"presentation"} />
                         <div className="title">Master of Science in Geography</div>
                        <div className="years">Graduated August 2011</div>
                        <hr></hr>

                    </div>
                    <div className="edu-item">
                        <img className="edu-img"
                             src={require("../images/uga-logo.png")}
                             role={"presentation"} />
                         <div className="title">Bachelor of Science in Geography</div>
                        <div className="years">Graduated May 2009</div>
                        <hr></hr>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Helpers.Element(Education);
