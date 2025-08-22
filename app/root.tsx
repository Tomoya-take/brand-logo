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

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <meta name="shopify-api-key" content={data.SHOPIFY_API_KEY} />
        <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>
      </head>
      <body>
        <AppProvider i18n={en.default}>
          <SafeAppBridgeProvider
            apiKey={data.SHOPIFY_API_KEY}
            config={{
              host: data.HOST,
              forceRedirect: true,
            }}
          >
            <Outlet />
          </SafeAppBridgeProvider>
        </AppProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}












