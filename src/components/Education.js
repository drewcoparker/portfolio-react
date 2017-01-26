import React from 'react';

function Education() {
    return(
        <div className="edu-container">
            <div className="edu-item">
                <img className="edu-img"
                     src={require("../images/uga-logo.png")}
                     role={"presentation"} />
            </div>
            <div className="edu-item">
                <img className="edu-img"
                     src={require("../images/uga-logo.png")}
                     role={"presentation"} />
            </div>
        </div>
    )
}

export default Education;
