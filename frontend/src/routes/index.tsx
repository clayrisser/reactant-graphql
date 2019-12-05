import React, { FC } from 'react';
import { Route, Switch, Router } from '@reactant/router';
import Home from './Home';

export interface RoutesProps {}

const Routes: FC<RoutesProps> = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
