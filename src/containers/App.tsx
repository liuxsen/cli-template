import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import RouterConfig from '../routers/index';

const history = createBrowserHistory();
const App = () => (
  <div>
    <RouterConfig history={history} />
  </div>
);

export default hot(module)(App);
