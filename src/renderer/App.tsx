import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { ExamplePage } from './pages';
import { ExampleLayout } from './layouts';
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
    <RouteWithLayout path="/" component={ExamplePage} layout={ExampleLayout}/>
   </Switch>
  </HashRouter>
 ));
