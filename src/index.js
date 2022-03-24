import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./containers/home/Home"
import { Provider } from "react-redux";
import store from "./store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
