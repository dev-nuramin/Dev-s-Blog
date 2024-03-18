import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import createStore from './redux/App/store.js'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={createStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
