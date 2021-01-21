## App.js

```js
import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Redirect,
} from 'react-router-dom';
import routes from '../routes';
import PrivateRoute from '../services/PrivateRoute';
import PublicRoute from '../services/PublicRoute';
import Header from './header/Header';
import { CommonLoading } from 'react-loadingg';
import { useSelector } from 'react-redux';

const App = () => {
  const isLoading = useSelector(state => state.isLoading.isLoading);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<CommonLoading color="orange" size="large" />}>
          <Header />
          <Switch>
            {routes.map(route => {
              return route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute
                  key={route.label}
                  {...route}
                  restricted={route.restricted}
                />
              );
            })}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
```

## PrivateRoute.js

```js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// private
export const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const token = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
```

## PublicRoute.js.js

```js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// public
export const PublicRoute = ({ component: Component, ...routeProps }) => {
  const token = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        token && routeProps.restricted ? (
          <Redirect to="/characters" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
```

## routes.js

```js
import { lazy } from "react";

export default [
  {
    path: "/login",
    label: "AuthorizationPage",
    exact: false,
    component: lazy(() => import("./pages/authorizationPage/AuthorizationPage" /* webpackChunkName: "AuthorizationPage" */)),
    private: false,
    restricted: true,
  },
  {
    path: "/characters",
    label: "CharactersPage",
    exact: false,
    component: lazy(() => import("./pages/charactersPage/CharactersPage" /* webpackChunkName: "AuthorizationPage" */)),
    private: true,
    restricted: false,
  },
];
```
