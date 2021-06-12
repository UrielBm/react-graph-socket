import React from "react";
import ReactDOM from "react-dom";
import SocketState from "./context/SocketState";
import HomePage from "./pages/HomePage";

ReactDOM.render(
  <SocketState>
    <HomePage />
  </SocketState>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
