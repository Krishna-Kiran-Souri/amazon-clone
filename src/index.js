import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./StateProvider";
import App from "./App";
import { initialState, reducer } from "./reducer";
ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
