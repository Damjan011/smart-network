import React from 'react';
import Home from './containers/home';
import Subscribers from './containers/subscribers';
import Networks from './containers/networks';
import Accounts from './containers/accounts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/subscribers">Subscribers</Link>
            </li>
            <li>
              <Link to="/networks">Networks</Link>
            </li>
            <li>
              <Link to="/accounts">Accounts</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/accounts">
            <Accounts />
          </Route>
          <Route path="/subscribers">
            <Subscribers />
          </Route>
          <Route path="/networks">
            <Networks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
