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
import type { LinksFunction, MetaFunction, LoaderFunctionArgs } from "@remix-run/node";

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
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        {/* window に API KEY と host を埋め込む */}
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






