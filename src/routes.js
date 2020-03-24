import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repositroy from './pages/Repository';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/repository" component={Repositroy} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
