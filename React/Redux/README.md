## App.js
```js
import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Redirect, Route, Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CommonLoading } from 'react-loadingg';

import routes from '../routes';
import PrivateRoute from '../services/PrivateRoute';
import PublicRoute from '../services/PublicRoute';


const App = () => {
  const isLoading = useSelector(state => state.isLoading.isLoading);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<CommonLoading color="orange" size="large" />}>
          {isLoading && (
            <div>
              <CommonLoading color="orange" size="large" />
            </div>
          )}
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
