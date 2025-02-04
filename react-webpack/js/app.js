import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Link, Route ,browserHistory} from 'react-router';

import HelloHandler from './hello.js';
// import Forms from './form.js';
import Timer from './timer.js';
import Menu from './menu.js';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="/hello" className="hellolink">Say Hello</Link>
        <Link to="/timer" className="timerlink">Timer</Link>
        {this.props.children}
      </div>
    );
  }
});


render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/hello" component={HelloHandler} />
      <Route path="/timer" component={Timer} />
    </Route>
  </Router>), document.getElementById('content'));







