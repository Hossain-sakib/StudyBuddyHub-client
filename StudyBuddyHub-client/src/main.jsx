import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Platform from "./platform/Platform";
const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <Platform />
  </React.StrictMode>
);
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
