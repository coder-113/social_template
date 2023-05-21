import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import authReducer from "./state/index.js";
import { configureStore } from "@reduxjs/toolkit";

import "./sass/main.scss";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={App} />
    </Provider>
  </React.StrictMode>
);
