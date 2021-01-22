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
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// REDUCERS
import userReducer from "./user/userReducer";
import someReducer from "./some/someReducer"; //example
import someReducer from "./some/someReducer"; //example
import someReducer from "./some/someReducer"; //example

// MIDDLEWARE
const middleware = [thunk]; // [thunk... , rest middlewares goes here]
const enhancer = applyMiddleware(...middleware);

// ROOT REDUCER
const rootReducer = combineReducers({
  users: userReducer,
  some: someReducer, //example
  some: someReducer, //example
  some: someReducer, //example
});

// STORE
export const store = createStore(rootReducer, composeWithDevTools(enhancer));
```

## actionType.js
```js

```

## usersActions.js
```js

```

## usersReducer.js
```js

```


## usersOrerations.js
```js

```

## reduxmap
```js
//reduxmap --shortcut

const mapStateToProps = (state) => ({
  // for example:
  login: state.user.name 
  email: state.user.email 
  password: state.user.password 
})

const mapDispatchToProps = {
  // all reducers goes here:
  createUser
}

connect(mapStateToProps, mapDispatchToProps)(Component)
```

