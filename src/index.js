// React and Router
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// Custom components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Professional from './components/Professional';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

// CSS
import './css/reset.css';
import './css/styles.css';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Home} />
            <Route path="/about-me" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
        </Route>
    </Router>,
    document.getElementById('root')
);
