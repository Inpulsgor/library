## index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App';
import { store, persistor } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
```


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

## store.js

```js
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loaderSlice from './loader/loaderSlice';
import authSlice from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    isLoading: loaderSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
```
