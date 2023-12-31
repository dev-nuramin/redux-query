import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./featured/api/apiSlice"; 
import "bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
