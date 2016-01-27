import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Login from './components/Login';
import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
