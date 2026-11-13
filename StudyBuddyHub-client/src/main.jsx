import { ThemeProvider } from "./platform/theme/ThemeProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
