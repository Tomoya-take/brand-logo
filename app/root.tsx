// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Brand Logo App" }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        {/* ✅ 環境変数を window に埋め込み */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__SHOPIFY_API_KEY__ = "${process.env.SHOPIFY_API_KEY ?? ""}";
            `,
          }}
        />
      </body>
    </html>
  );
}





