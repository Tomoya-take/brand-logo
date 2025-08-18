import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// ❌ NG
// import { Provider } from "@shopify/app-bridge-react";

// ✅ OK
import AppBridgeReact from "@shopify/app-bridge-react";
const { Provider } = AppBridgeReact;

export const links: LinksFunction = () => {
  return [];
};

export default function App() {
  const host = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  ).get("host") || "";

  const apiKey = "9e0bf26577909d0642a6fc4cf844d5bb";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider config={{ apiKey, host }}>
          <Outlet />
        </Provider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


