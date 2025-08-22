// app/routes/auth.exit-iframe.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return shopify.authenticate.exitIframe(request);
}


