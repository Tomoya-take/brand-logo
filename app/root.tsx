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
import SafeAppBridgeProvider from "./components/SafeAppBridgeProvider";

// Polaris
import { AppProvider } from "@shopify/polaris";
import * as en from "@shopify/polaris/locales/en.json";

// -------------------------
// Meta 情報
// -------------------------
export const meta: MetaFunction = () => {
  return [{ title: "Brand Logo App" }];
};

// -------------------------
// Loader
// -------------------------
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  return {
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY || "",
    HOST: url.searchParams.get("host") || "",
    SHOP: url.searchParams.get("shop") || "",
  };
}

// -------------------------
// App コンポーネント
// -------------------------
export default function App() {
  const data = useLoaderData<typeof loader>();

  const config = {
    apiKey: data.SHOPIFY_API_KEY,
    host: data.HOST,
    shop: data.SHOP, 
    forceRedirect: true,
  };

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <meta name="shopify-api-key" content={data.SHOPIFY_API_KEY} />
        <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>
      </head>
      <body>
        {/* Polaris AppProvider を追加 */}
<AppProvider i18n={en.default}>
  <SafeAppBridgeProvider config={config}>
    <Outlet />
  </SafeAppBridgeProvider>
</AppProvider>


        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__SHOPIFY_API_KEY__ = "${data.SHOPIFY_API_KEY}";
              window.__SHOPIFY_HOST__ = "${data.HOST}";
            `,
          }}
        />
      </body>
    </html>
  );
}












