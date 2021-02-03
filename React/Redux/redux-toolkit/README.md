## index.js 
```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "redux/store";
import App from "components/App/App";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
```

## store.js
```js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

// REDUCERS
import authReducer from "./auth/authReducer";
import loaderReducer from "./loader/loaderReducer";
import categoriesReducer from "./categories/categoriesReducer";
import colorsReducer from "./colors/colorsReducer";

// PERSIST CONFIG
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user", "isAuthenticated"],
  // whitelist: ['token'] // in this case only token will be set to localStorage
};

const defaultMiddleware = getDefaultMiddleware();

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    isLoading: loaderReducer,
    categories: categoriesReducer,
    colors: colorsReducer,
  },
  middleware: [...defaultMiddleware, thunk, logger],
});

export const persistor = persistStore(store);
```

## Actions.js
```js
import { createAction } from "@reduxjs/toolkit";

// SIGN IN

export const signInRequest = createAction("auth/SIGN_IN_REQUEST");
export const signInSuccess = createAction(
  "auth/SIGN_IN_SUCCESS",
  (response) => ({
    payload: {
      response,
    },
  })
);

export const signInError = createAction("auth/SIGN_IN_ERROR");

// SIGN UP

export const signUpRequest = createAction("auth/SIGN_UP_REQUEST");
export const signUpSuccess = createAction(
  "auth/SIGN_UP_SUCCESS",
  (response) => ({
    payload: {
      response,
    },
  })
);

export const signUpError = createAction("auth/SIGN_UP_ERROR");

// SIGN OUT

export const signOutSuccess = createAction("auth/SIGN_OUT_SUCCESS");
export const signOutError = createAction("auth/SIGN_OUT_ERROR");

// CLEAR ERROR

export const clearError = createAction("auth/CLEAR_ERROR");
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
