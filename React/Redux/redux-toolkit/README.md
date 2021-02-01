## index.js 
```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "redux/store";
import App from "components/App/App";
import "scss/main.scss";

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

## App.js
```js
import React, { Suspense } from "react";
import { Switch, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { CommonLoading } from "react-loadingg";

import routes from "pages/routes";
import { PrivateRoute, PublicRoute } from "services/helpers";
import { Loader } from "components";

const App = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const location = useLocation();

  return (
    <Suspense fallback={<CommonLoading color="orange" size="large" />}>
      {isLoading && <Loader />}
      <Switch location={location}>
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

## store.js
```js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export const persistor = persistStore(store);

```

## rootReducer.js
```js
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// REDUCERS
import authReducer from "./auth/authReducer";
import loaderReducer from "./loader/loaderReducer";
import categoriesReducer from "./categories/categoriesReducer";
import colorsReducer from "./colors/colorsReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user", "isAuthenticated"],
  // whitelist: ['token'] // in this case only token will be set to localStorage
};

// ROOT REDUCER
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  isLoading: loaderReducer,
  categories: categoriesReducer,
  colors: colorsReducer,
});

export default rootReducer;
```

## Actions.js
```js
import { createAction } from "@reduxjs/toolkit";
import authTypes from "./authTypes";

/*
 * SIGN IN
 */

export const signInRequest = createAction(authTypes.SIGN_IN_REQUEST);

export const signInSuccess = createAction(
  authTypes.SIGN_IN_SUCCESS,
  (response) => ({
    payload: {
      response,
    },
  })
);

export const signInError = createAction(authTypes.SIGN_IN_ERROR);

/*
 * SIGN UP
 */

export const signUpRequest = createAction(authTypes.SIGN_UP_REQUEST);

export const signUpSuccess = createAction(
  authTypes.SIGN_UP_SUCCESS,
  (response) => ({
    payload: {
      response,
    },
  })
);

export const signUpError = createAction(authTypes.SIGN_UP_ERROR);

/*
 * SIGN OUT
 */

export const signOutSuccess = createAction(authTypes.SIGN_OUT_SUCCESS);
export const signOutError = createAction(authTypes.SIGN_OUT_ERROR);

/*
 * CLEAR ERROR
 */

export const clearError = createAction(authTypes.CLEAR_ERROR);
```

## Reducer.js
```js
import { combineReducers } from "redux";
import * as authActions from "./authActions";

const user = (state = null, { type, payload }) => {
  switch (type) {
    case authActions.signInSuccess.type:
    case authActions.signUpSuccess.type:
      return payload.response.user;

    case authActions.signOutSuccess.type:
      return null;

    default:
      return state;
  }
};

const isAuthenticated = (state = false, { type }) => {
  switch (type) {
    case authActions.signUpSuccess.type:
    case authActions.signInSuccess.type:
      return true;

    case authActions.signOutSuccess.type:
      return false;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case authActions.signInSuccess.type:
    case authActions.signUpSuccess.type:
      return payload.response.user.refreshToken;

    case authActions.signOutSuccess.type:
      return null;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case authActions.clearError.type:
      return null;

    case authActions.signInError:
    case authActions.signUpError:
    case authActions.signOutError:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  isAuthenticated,
  user,
  token,
  error,
});
```
## Reducer.js
```js
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import * as authActions from "./authActions";

const user = createReducer(null, {
  [authActions.signInSuccess]: (state, action) => action.payload.response.user,
  [authActions.signUpSuccess]: (state, action) => action.payload.response.user,
  [authActions.signOutSuccess]: (state, action) => null,
});

const isAuthenticated = createReducer(false, {
  [authActions.signInSuccess]: (state, action) => true,
  [authActions.signUpSuccess]: (state, action) => true,
  [authActions.signOutSuccess]: (state, action) => false,
});

const token = createReducer(null, {
  [authActions.signInSuccess]: (state, action) =>
    action.payload.response.user.refreshToken,
  [authActions.signUpSuccess]: (state, action) =>
    action.payload.response.user.refreshToken,
  [authActions.signOutSuccess]: (state, action) => null,
});

const error = createReducer(null, {
  [authActions.signInError]: (state, action) => action.payload.error,
  [authActions.signUpError]: (state, action) => action.payload.error,
  [authActions.signOutError]: (state, action) => action.payload.error,
  [authActions.clearError]: (state, action) => null,
});

export default combineReducers({
  isAuthenticated,
  user,
  token,
  error,
});
```
