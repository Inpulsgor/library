## index.js
```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App/App";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
```

## store.js
```js
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

// MIDDLEWARE
const middleware = [thunk]; // [thunk, ...] <- all middlewares goes here
const enhancer = applyMiddleware(...middleware);

// STORE
export const store = createStore(rootReducer, composeWithDevTools(enhancer));
```

## rootReducer.js
```js
import { combineReducers } from "redux";

// REDUCERS
import userReducer from "./user/userReducer";
import someReducer from "./some/someReducer"; 
import someReducer from "./some/someReducer"; 
import someReducer from "./some/someReducer"; 

// ROOT REDUCER
const rootReducer = combineReducers({
  user: userReducer,
  some: someReducer, 
  some: someReducer,
  some: someReducer, 
});

export default rootReducer;
```

## actionType.js
```js
export const ActionType = {
  CREATE_USER_REQUEST: "CREATE_USER_REQUEST",
  CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
  CREATE_USER_ERROR: "CREATE_USER_ERROR",
};
```

## userActions.js
```js

```

## userReducer.js
```js

```


## userOrerations.js
```js

```

## reduxmap
```js
//reduxmap --shortcut

const mapStateToProps = (state) => ({
  login: state.user.name //example
  email: state.user.email //example
  password: state.user.password //example
  ...
})

const mapDispatchToProps = {
  addUser,
  deleteUser,
  ...
}

connect(mapStateToProps, mapDispatchToProps)(Component)
```

