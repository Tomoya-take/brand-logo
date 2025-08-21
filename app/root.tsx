import type {
  MetaFunction,
  LoaderFunctionArgs,
  LinksFunction,
} from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import SafeAppBridgeProvider from "./components/SafeAppBridgeProvider";

import { AppProvider } from "@shopify/polaris";
// ✅ JSON は require で読み込む
const enTranslations = require("@shopify/polaris/locales/en.json");
// ✅ CSS は links() 経由で読み込む
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";

export const meta: MetaFunction = () => [{ title: "Brand Logo App" }];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: polarisStyles },
];

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
      </head>
      <body>
        <AppProvider i18n={enTranslations}>
          <SafeAppBridgeProvider config={config}>
            <Outlet />
          </SafeAppBridgeProvider>
        </AppProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}







