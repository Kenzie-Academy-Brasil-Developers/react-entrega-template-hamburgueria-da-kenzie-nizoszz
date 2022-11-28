import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import Global from "./style/global";
import { Reset } from "./style/reset";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Reset />
    <Global />
    <App />
  </React.StrictMode>
);
