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

export default rootReducer;
```

## usersTypes.js
```js
export const ActionTypes = {
  ADD_USER: "users/ADD_USER",
  DELETE_USER: "users/DELETE_USER",
  // async actions
  ADD_USER_REQUEST: "users/ADD_USER_REQUEST",
  ADD_USER_SUCCESS: "users/ADD_USER_SUCCESS",
  ADD_USER_ERROR: "users/ADD_USER_ERROR",
};
```

## usersActions.js
```js
import { usersTypes } from "./usersTypes";

export const addUser = () => ({
  type: usersTypes.ADD_USER,
  payload: {
    user,
  }
});

export const deleteUser = (id) => ({
  type: usersTypes.DELETE_USER,
  payload: {
    id,
  }
});
```

## usersReducer.js
```js
import { combineReducers } from "redux";
import { usersTypes } from "./usersTypes";

const usersReducer = (state = [], action) => {
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
  data: usersReducer,
});

```


## usersOrerations.js
```js

```

## reduxmap --shortcut
```js
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "./usersActions";


const mapStateToProps = (state) => ({
  users: state.users.data
  ...
})

//  Similar Hook
const users = useSelector(state => state.users.data)
//---------------------------------------------

const mapDispatchToProps = dispatch => ({
  onAddUser: () => dispatch(addUser()),
  onDeleteUser: (id) => dispatch(deleteUser(id)),
  ...
})

//  Similar Hook
const dispatch = useDispatch(addUser())
const dispatch = useDispatch(deleteUser(id))
//---------------------------------------------

connect(mapStateToProps, mapDispatchToProps)(Component)
```

