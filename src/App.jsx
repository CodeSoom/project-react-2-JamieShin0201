import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import UsersPage from './pages/UsersPage';
import RestaurantsPage from './pages/RestaurantsPage';
import VisitorCountsPage from './pages/VisitorCountsPage';

export default function App() {
  return (
    <div>
      <h1>
        <Link to="/">Eatgo Admin</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/restaurants">Restaurants</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={VisitorCountsPage} />
      </Switch>
      <Switch>
        <Route exact path="/users" component={UsersPage} />
      </Switch>
      <Switch>
        <Route exact path="/restaurants" component={RestaurantsPage} />
      </Switch>

    </div>
  );
}
