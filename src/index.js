import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { parse } from "query-string";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App user={parse(window.location.search).user} />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
