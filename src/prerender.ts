import * as React from "react";
import { HelmetProvider } from "react-helmet-async";
import { renderToString } from "react-dom/server";
import App from "./App";

// prerender function called by the plugin
export async function prerender() {
  const helmetContext: { helmet?: any } = {};

  const test: any = (
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  );

  // Render the app to string inside HelmetProvider to collect head
  const html: any = renderToString(
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  );

  // Extracted head data from helmetContext.helmet
  const helmet = helmetContext.helmet || {};

  // Compose head tags as a string to be injected into <head>
  const headElements = `
    ${helmet.title?.toString() || ""}
    ${helmet.meta?.toString() || ""}
    ${helmet.link?.toString() || ""}
  `;

  return {
    html, // app's rendered HTML to inject inside #root
    head: {
      elements: new Set([
        {
          type: "raw",
          props: { dangerouslySetInnerHTML: { __html: headElements } },
        },
      ]),
    },
  };
}
