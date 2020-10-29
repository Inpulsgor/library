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
```js

import { lazy } from "react";

export default [
  {
    path: "/login",
    label: "AuthorizationPage",
    exact: false,
    component: lazy(() =>
      import("./pages/authorizationPage/AuthorizationPage")
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/characters",
    label: "CharactersPage",
    exact: false,
    component: lazy(() => import("./pages/charactersPage/CharactersPage")),
    private: true,
    restricted: false,
  },
];

```
