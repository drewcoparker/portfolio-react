import React, { Component } from 'react';
import Header from './Header';

import Home from './Home';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="pusher"></div>
                <Home name="home"/>
                <About name="about"/>
                <Experience name="experience"/>
                <Education name="education"/>
                <Projects name="projects"/>
                <Contact name="contact"/>
            </div>
        );
    }
}

export default App;
