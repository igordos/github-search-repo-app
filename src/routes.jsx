// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { Route } from 'react-router-dom';
import Search from './pages/Search';
import Repo from './pages/Repo';
import Home from './pages/Home';

// Fix flow types for component when flow strict mode
type IRoute = {
  path: string,
  component: ComponentType<any>,
  exact?: boolean,
  routes?: IRoute[],
};

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/search',
    component: Search,
    exact: true,
  },
  {
    path: '/repos/:owner/:repo',
    component: Repo,
    exact: true,
  },
];

export const RouteWithSubRoutes = (route: IRoute) => (
  <Route
    path={route.path}
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
);
