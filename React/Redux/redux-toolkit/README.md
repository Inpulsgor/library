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
