import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/main.scss";

import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./Components/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
);
