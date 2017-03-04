import React, { Component } from 'react';
import Scroll, { Link, DirectLink, Element, Events, animateScroll, scrollSpy } from 'react-scroll';

class Header extends Component {

    componentDidMount() {
        Events.scrollEvent.register('begin', (to, element) => {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', (to, element) => {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }

    componentWillUnmount() {

    }

    scrollToTop() {

    }

    scrollToBottom() {

    }

    scrollTo() {

    }

    scrollMore() {

    }

    handleSetActive() {

    }

    render() {
        return(
            <div className="header">
                <div className="header-container">

                    <div className="header-brand">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500} >
                            Drew Parker
                        </Link>
                    </div>

                    <div className="header-menu-items">
                        <div className="menu-item">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                About
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                Experience
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link
                                activeClass="active"
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                Education
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                Projects
                            </Link>
                        </div>
                        <div className="menu-item">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                Contact
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Header
