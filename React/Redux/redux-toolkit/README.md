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

## Opetations.js

```js
import { firebaseAuth } from "../../services/api/firebase";
import { loaderActive, loaderDisabled } from "../loader/loaderActions";
import * as categoriesActions from "../categories/categoriesActions";
import * as colorsActions from "../colors/colorsActions";
import {
  signInRequest,
  signInSuccess,
  signInError,
  signUpRequest,
  signUpSuccess,
  signUpError,
  signOutSuccess,
  signOutError,
  clearError,
} from "./authActions";

/*
 * SIGN IN
 */

export const signIn = (email, password) => (dispatch) => {
  dispatch(signInRequest());
  dispatch(loaderActive());

  firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(signInSuccess(response));
      dispatch(clearError());
    })
    .catch((error) => {
      dispatch(signInError(error.message));
    })
    .finally(() => dispatch(loaderDisabled()));
};

/*
 * SIGN UP
 */

export const signUp = (email, password) => (dispatch) => {
  dispatch(signUpRequest());
  dispatch(loaderActive());

  firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch(signUpSuccess(response));
      dispatch(clearError());
    })
    .catch((error) => {
      dispatch(signUpError(error.message));
    })
    .finally(() => dispatch(loaderDisabled()));
};

/*
 * SIGN OUT
 */

export const logOut = () => (dispatch) => {
  dispatch(loaderActive());

  firebaseAuth
    .signOut()
    .then(() => {
      dispatch(signOutSuccess());
      dispatch(clearError());
      dispatch(categoriesActions.setSelectedCategory(null));
      dispatch(categoriesActions.resetCategories());
      dispatch(colorsActions.resetColors());
    })
    .catch((error) => {
      dispatch(signOutError(error.message));
    })
    .finally(() => dispatch(loaderDisabled()));
};
```
