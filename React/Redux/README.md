## store.js

```js
/*
* ____________REDUX STORE_________________________________________________
*/

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

// REDUCERS
import usersReducer from "./user/usersReducer"; // current example
import someReducer from "./some/someReducer"; 
import someReducer from "./some/someReducer"; 
import someReducer from "./some/someReducer"; 

// ROOT REDUCER
const rootReducer = combineReducers({
  users: usersReducer, // current example
  some: someReducer, 
  some: someReducer,
  some: someReducer, 
});

// MIDDLEWARE
const middleware = [thunk]; // [thunk, ...] <- all middlewares goes here
const enhancer = applyMiddleware(...middleware);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));

/*
* ____________TOOLKIT STORE_________________________________________________
*/

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

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
  middleware: [...defaultMiddleware, thunk],
});

export const persistor = persistStore(store);
```

## actions.js
```js
/*
* ____________REDUX ACTIONS_________________________________________________
*/

/*
* ____________TOOLKIT ACTIONS_________________________________________________
*/
```

## reducers.js
```js
/*
* ____________REDUX REDUCERS_________________________________________________
*/

/*
* ____________TOOLKIT REDUCERS_________________________________________________
*/

```

