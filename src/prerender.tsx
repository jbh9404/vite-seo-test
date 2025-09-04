import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

interface PrerenderReturn {
  html: string;
  head?: {
    title?: string;
    lang?: string;
    elements?: Set<any>;
  };
}

export async function prerender(): Promise<PrerenderReturn> {
  const helmetContext = {};

  // Render app to string with HelmetProvider context to collect head data
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  );

  // Extract helmet context info
  // @ts-ignore The helmetContext will get filled with helmet data at render time
  const { helmet } = helmetContext as any;

  // Compose head elements strings from helmet props (title, meta, links, etc.)
  const headElements = new Set<any>();
  if (helmet?.link)
    headElements.add({
      type: "link",
      props: { dangerouslySetInnerHTML: { __html: helmet.link.toString() } },
    });
  if (helmet?.meta)
    headElements.add({
      type: "meta",
      props: { dangerouslySetInnerHTML: { __html: helmet.meta.toString() } },
    });
  if (helmet?.title) helmet.title.toString(); // Title string for head object

  return {
    html: appHtml,
    head: {
      title: helmet?.title?.toString() || "Default Title",
      lang: "en", // for example
      elements: headElements,
    },
  };
}
