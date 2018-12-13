import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import reducers from "./store";
import { Provider } from "react-redux";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  global.document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
