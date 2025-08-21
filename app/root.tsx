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

import "@shopify/polaris/build/styles.css"; // ✅ esm → styles.css に修正
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

export const meta: MetaFunction = () => {
  return [{ title: "Brand Logo App" }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  return {
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY || "",
    HOST: url.searchParams.get("host") || "",
  };
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  const config = {
    apiKey: data.SHOPIFY_API_KEY,
    host: data.HOST,
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
        <SafeAppBridgeProvider config={config}>
          <AppProvider i18n={enTranslations}>
            <Outlet />
          </AppProvider>
        </SafeAppBridgeProvider>
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








