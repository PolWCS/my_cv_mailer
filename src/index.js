import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import jsonServerProvider from "ra-data-json-server";

import createAppStore from "./redux/createAppStore";
import authProvider from "./components/login/authProvider";

import App from "./App";
import "./index.css";

const dataProvider = jsonServerProvider("http://localhost:3000/api");
const history = createHashHistory();
const store = createAppStore({
  authProvider,
  dataProvider,
  history,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
