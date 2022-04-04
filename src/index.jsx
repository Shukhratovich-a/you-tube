import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as NavProvider } from "./Context/Nav";
import { Provider as TokenProvider } from "./Context/Token";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <NavProvider>
          <App />
        </NavProvider>
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
