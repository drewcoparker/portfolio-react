// React and Router
import React from 'react';
import ReactDOM from 'react-dom';

// Custom components
import App from './components/App';

// CSS
import './css/reset.css';
import './css/styles.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// ReactDOM.render(
//     <Router history={hashHistory}>
//         <Route path="/" component={App} >
//             <IndexRoute component={Home} />
//             <Route path="/about-me" component={About} />
//             <Route path="/experience" component={Experience} />
//             <Route path="/education" component={Education} />
//             <Route path="/projects" component={Projects} />
//             <Route path="/contact" component={Contact} />
//         </Route>
//     </Router>,
//     document.getElementById('root')
// );
