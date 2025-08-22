// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

// ✅ 公式の AppProvider（App Bridge/host 周りを面倒見てくれる）
import { AppProvider as ShopifyAppProvider } from "@shopify/shopify-app-remix/react";

// Polaris（任意で併用OK）
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import * as en from "@shopify/polaris/locales/en.json";

export const meta: MetaFunction = () => [{ title: "Brand Logo App" }];

export async function loader({}: LoaderFunctionArgs) {
  return json({
    apiKey: process.env.SHOPIFY_API_KEY || "",
  });
}

export default function App() {
  const { apiKey } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {/* ✅ App Bridge 初期化と host ハンドリングはこれに任せる */}
        <ShopifyAppProvider apiKey={apiKey} isEmbeddedApp>
          <PolarisProvider i18n={en.default}>
            <Outlet />
          </PolarisProvider>
        </ShopifyAppProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}












