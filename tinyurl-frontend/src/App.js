import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {Home} from './pages/Home';
import {Create} from './pages/TinyURL/Create';
import {Index} from './pages/TinyURL/Index';
import {Details} from './pages/TinyURL/Details';
import {About} from './pages/TinyURL/About';
import {HomeNavBar} from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
// import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HomeNavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/tiny-url" component={Index} exact />
              <Route path="/tiny-url/create" component={Create} exact/>
              <Route path="/tiny-url/about" component={About} exact/>
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
