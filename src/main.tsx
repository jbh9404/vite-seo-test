// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.tsx";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
// import ReactDOM from "react-dom";
import { hydrateRoot } from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import App from "./App";

// const app = <App />;

// hydrateRoot(app, document.getElementById("app"));
const container = document.getElementById("root");
if (container) {
  hydrateRoot(container, <App />);
}
