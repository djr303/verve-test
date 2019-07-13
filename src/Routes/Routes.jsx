import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from '../Layouts/Nav';
import Review from '../Pages/Review';
import Task from '../Pages/Task';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Review} />
      <Route exact path="/review" component={Review} />
      <Route exact path="/task" component={Task} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
