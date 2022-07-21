import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";
import axios from "axios";
const container = document.getElementById("root");
const root = createRoot(container);
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001/";
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
