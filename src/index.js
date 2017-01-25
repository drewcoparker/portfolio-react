import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Experience from './Experience';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import './index.css';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Home} />
            <Route path="/about-me" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
        </Route>
    </Router>,
    document.getElementById('root')
);
