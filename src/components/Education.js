import React from 'react';
import { Helpers } from 'react-scroll';

function Education() {
    return(
        <div className="education">
            <div className="container-fluid edu-container">
                <div className="container item-wrapper">
                    <div className="row">
                        <div className="edu-item">
                            <div className="edu-img">
                                <img
                                    src={require("../images/uga-logo.png")}
                                    role={"presentation"}
                                />
                            </div>
                            <hr></hr>
                            <div className="title">Master of Science in Geography</div>
                            <div className="years">Graduated August 2011</div>
                        </div>

                        <div className="edu-item">
                            <div className="edu-img">
                                <img
                                    src={require("../images/uga-logo.png")}
                                    role={"presentation"}
                                />
                            </div>
                            <hr></hr>
                            <div className="title">Bachelor of Science in Geography</div>
                            <div className="years">Graduated May 2009</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Helpers.Element(Education);
