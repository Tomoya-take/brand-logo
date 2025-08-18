import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// ✅ CommonJS モジュールなので default import から取り出す
import AppBridgeReact from "@shopify/app-bridge-react";
const { Provider } = AppBridgeReact;

export const links: LinksFunction = () => {
  return [];
};

export default function App() {
  // host パラメータを取得
  const host =
    new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    ).get("host") || "";

  // パートナーダッシュボードの Client ID
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
        {/* ✅ SSRガードを入れることで Render デプロイ時のエラーを防ぐ */}
        {typeof window !== "undefined" ? (
          <Provider config={{ apiKey, host }}>
            <Outlet />
          </Provider>
        ) : (
          <Outlet />
        )}

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}



