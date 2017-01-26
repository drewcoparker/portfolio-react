import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About'
import Experience from './Experience'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;
