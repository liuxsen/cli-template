import * as React from 'react';
import {
  Router,
  Route,
  Link,
  Switch,
  RouteComponentProps
} from 'react-router-dom';
import Login from '../containers/Login/index';

import Home from '../containers/Home/index';

export interface Props {
  history: any;
}

const RouterConfig = ({ history }: Props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default RouterConfig;
