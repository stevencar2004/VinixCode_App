import React from "react";
import ReactDOM from "react-dom";
import { ProviderVinix } from "./Context/Provider";
import { AppRouter } from "./Router/AppRouter";

import "./styles/main.css";
ReactDOM.render(
  <React.StrictMode>
    <ProviderVinix>
      <AppRouter />
    </ProviderVinix>
  </React.StrictMode>,
  document.getElementById("root")
);
