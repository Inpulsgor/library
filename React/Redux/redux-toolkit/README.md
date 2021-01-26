## index.js 
```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';

import App from "./components/App/App";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <App />
    </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
```

## store.js
```js
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import thunk from "redux-thunk";
import { logger } from "redux-logger";

import rootReducer from "./rootReducer";

// all auth data will be set to localStorage
const authPersistConfig = {
  key: 'auth',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// MIDDLEWARE
const middleware = [thunk, logger]; // [thunk, ...] <- middleware goes here
const enhancer = applyMiddleware(...middleware);

// STORE
export const store = createStore(persistedReducer, composeWithDevTools(enhancer));
export const persistor = persistStore(store);
```

## rootReducer.js
```js
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';

// REDUCERS
import authReducer from "./auth/authReducer";
import listsReducers from "./lists/listsReducers";
import ColorsReducers from "./colors/ColorsReducers";

// ROOT REDUCER
const rootReducer = combineReducers({
  auth: authReducer,
  lists: listsReducers,
  colors: ColorsReducers,
});

export default rootReducer;
```

## rootReducer.js *in this case - only token will be set to localStorage
```js
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// REDUCERS
import authReducer from "./auth/authReducer";
import listsReducers from "./lists/listsReducers";
import ColorsReducers from "./colors/ColorsReducers";

// only token will be set to localStorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
};

// ROOT REDUCER
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer), // persist will use only token from auth
  lists: listsReducers,
  colors: ColorsReducers,
});

export default rootReducer;
```

## App.js
```js
import React, { Suspense, useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CommonLoading } from "react-loadingg";

// local imports
import routes from "../../pages/routes";
import { PrivateRoute, PublicRoute } from "../../services/helpers/helpers";
// operations
import * as listsOperations from "../../redux/lists/listsOperations";
import * as colorsOperations from "../../redux/colors/colorsOperations";
// styles
import "../../scss/main.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listsOperations.fetchLists());
  }, [dispatch]);

  useEffect(() => {
    dispatch(colorsOperations.fetchColors());
  }, [dispatch]);

  return (
    <Suspense fallback={<CommonLoading color="orange" size="large" />}>
      <Switch>
        {routes.map((route) => {
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
        <Redirect to="/auth" />
      </Switch>
    </Suspense>
  );
};

export default App;
```
