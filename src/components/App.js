import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="pusher"></div>
                {this.props.children}
            </div>
        );
    }
}

export default App;
