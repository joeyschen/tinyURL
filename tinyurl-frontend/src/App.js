import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {Home} from './pages/Home';
import {TinyUrl} from './pages/TinyURL/TinyUrl';
import {Details} from './pages/TinyURL/Details';
import NotFoundPage from './pages/NotFoundPage';
// import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <NavBar /> */}
          <div id="page-body">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/tiny-url" component={TinyUrl} exact />
              <Route path="/tiny-url/details/:id" component={Details} exact />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
