import React from 'react';
import { Helpers } from 'react-scroll';

function Education() {
    return(
        <div className="education">
            <div style={{backgroundColor: `#FFA630`, width: `100%`, height: `5px`}}></div>
            <div style={{backgroundColor: `#FFC67B`, width: `100%`, height: `5px`}}></div>
            <div style={{backgroundColor: `#FFD6A0`, width: `100%`, height: `5px`}}></div>
            <div className="container-fluid edu-container">
                <div className="container item-wrapper">
                    <div className="row">
                        <div id="masters" className="col-xs-12 col-sm-5 col-sm-offset-1 edu-item">
                            <div className="edu-img">
                                <img
                                    src={require("../images/uga-logo.png")}
                                    role={"presentation"}
                                />
                            </div>
                            <div className="title">Master of Science in Geography</div>
                            <div className="years">Graduated August 2011</div>
                            <hr></hr>
                            <div className="honors-wrapper">
                                <div className="honors-item">
                                    Honors: Wormsloe Institute for Environmental
                                    History Fellowship
                                </div>
                                <div className="honors-item">
                                    Thesis title: <span>Assessing the Performance of
                                    Two Non-Commercial Bare Earth Classification
                                    Algorithms for LiDAR Data Sets within the
                                    Southern Appalachians</span>
                                </div>
                            </div>
                        </div>

                        <div id="bachelors" className="col-xs-12 col-sm-5 edu-item">
                            <div className="edu-img">
                                <img
                                    src={require("../images/uga-logo.png")}
                                    role={"presentation"}
                                />
                            </div>
                            <div className="title">Bachelor of Science in Geography</div>
                            <div className="years">Graduated May 2009</div>
                            <hr></hr>
                            <div className="honors-wrapper">
                                <div className="honors-item">
                                    Certificate in Geographic Information Science
                                </div>
                                <div className="honors-item">
                                    Secretary of the ASPRS student chapter at UGA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Helpers.Element(Education);
