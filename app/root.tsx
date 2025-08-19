// app/root.tsx
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

export const links: LinksFunction = () => {
  return [];
};

// Loaderで環境変数を注入
export async function loader({ request }: LoaderFunctionArgs) {
  return {
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
  };
}

export default function App() {
  const { SHOPIFY_API_KEY } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />

        {/* ✅ window に APIキーを埋め込む */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__SHOPIFY_API_KEY__ = "${SHOPIFY_API_KEY}";`,
          }}
        />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}




