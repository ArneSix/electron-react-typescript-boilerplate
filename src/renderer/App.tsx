import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Login } from './pages';
import { RouteWithLayout, RouteNoLayout } from './Utilities';


/*
hot component will take care of hot-reloading the electron application
every change inside this component tree will auto update

To add new routes, please use <RouteWithLayout> or <RouteNoLayout>
*/
export default hot((): JSX.Element =>
 (
  <HashRouter>
   <Switch>
    <RouteNoLayout path="/" component={Login}/>
   </Switch>
  </HashRouter>
 ));