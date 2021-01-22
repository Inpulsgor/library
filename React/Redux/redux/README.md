## index.js
```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App/App";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
```

## store.js
```js

```

## store
```js

```

## reduxmap
```js
//reduxmap --shortcut

const mapStateToProps = (state) => ({
  ...
})

const mapDispatchToProps = {
  ...
}

connect(mapStateToProps, mapDispatchToProps)(Component)
```


## store
```js

```


## store
```js

```
