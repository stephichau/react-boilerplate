import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from "../containers/Home/Home";
import Users from '../containers/Users/Users';
import Colors from '../containers/Colors/Colors';
import NotFound from '../containers/NotFound/NotFound';

const routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/colors' component={Colors} />
      <Route path='/404' component={NotFound} />
      <Redirect from='*' to='/404' />
    </Switch>
  );
};

export default routes;