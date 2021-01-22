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

## actionTypes.js
```js
export const ActionTypes = {
  ADD_USER: "user/ADD_USER",
  DELETE_USER: "user/DELETE_USER",
  // async actions
  ADD_USER_REQUEST: "user/ADD_USER_REQUEST",
  ADD_USER_SUCCESS: "user/ADD_USER_SUCCESS",
  ADD_USER_ERROR: "user/ADD_USER_ERROR",
};
```

## userActions.js
```js
import { ActionTypes } from "./actionTypes";

export const addUser = () => ({
  type: ActionTypes.ADD_USER,
  payload: {
    user,
  }
});

export const deleteUser = (id) => ({
  type: ActionTypes.ADD_USER,
  payload: {
    id,
  }
});
```

## userReducer.js
```js
import { combineReducers } from "redux";
import { ActionTypes } from "./actionTypes";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return [...state, action.payload.user];
    
    case ActionTypes.DELETE_USER:
      return state.filter(user => user.id !== action.payload.id);    

    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
});

```


## userOrerations.js
```js

```

## reduxmap --shortcut
```js
import { addUser, deleteUser } from "./userActions";

const mapStateToProps = (state) => ({
  login: state.user.name //example
  email: state.user.email //example
  password: state.user.password //example
  ...
})

const mapDispatchToProps = dispatch => {
  onAddUser: () => dispatch(addUser()),
  onDeleteUser: (id) => dispatch(deleteUser(id)),
  ...
}

connect(mapStateToProps, mapDispatchToProps)(Component)
```

